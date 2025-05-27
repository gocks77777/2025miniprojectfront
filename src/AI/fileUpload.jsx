import React, { useState, useRef } from 'react';
import axios from 'axios';
import './style.css';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [questionCount, setQuestionCount] = useState(5);
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        } else {
            alert('PDF 파일만 업로드 가능합니다.');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === 'application/pdf') {
            setFile(droppedFile);
        } else {
            alert('PDF 파일만 업로드 가능합니다.');
        }
    };

    const handleSubmit = async () => {
        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('questionCount', questionCount);

        try {
            const response = await axios.post('/api/ai/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Upload failed:', error);
            alert('파일 업로드에 실패했습니다.');
        }
    };

    return (
        <div className="container">
            <h1>PDF로 문제 만들기</h1>
            <div 
                className={`drop-area ${isDragging ? 'dragging' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <p>여기에 PDF 파일을 드래그 앤 드롭하세요</p>
                <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="application/pdf" 
                    style={{ display: 'none' }}
                />
                <button onClick={() => fileInputRef.current.click()}>
                    파일 선택
                </button>
                {file && <p className="file-name">선택된 파일: {file.name}</p>}
            </div>
            <div className="options">
                <label htmlFor="questionCount">문제 개수:</label>
                <select 
                    id="questionCount"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(e.target.value)}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <button className="generate-btn" onClick={handleSubmit}>
                문제 만들기
            </button>
        </div>
    );
};

export default FileUpload;