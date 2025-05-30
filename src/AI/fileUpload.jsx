import React, { useState, useRef } from 'react';
import axios from 'axios';
import './fileUpload.css';

const FileUpload = () => {
    const [files, setFiles] = useState([]);
    const [questionCount, setQuestionCount] = useState(5);
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files).filter(f => f.type === 'application/pdf');
        if (selectedFiles.length > 0) {
            setFiles(prev => [...prev, ...selectedFiles]);
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
        const droppedFiles = Array.from(e.dataTransfer.files).filter(f => f.type === 'application/pdf');
        if (droppedFiles.length > 0) {
            setFiles(prev => [...prev, ...droppedFiles]);
        } else {
            alert('PDF 파일만 업로드 가능합니다.');
        }
    };

    const handleRemoveFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSubmit = async () => {
        if (files.length === 0) {
            alert('파일을 선택해주세요.');
            return;
        }

        const formData = new FormData();
        files.forEach((file, idx) => {
            formData.append('files', file);
        });
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
        <div className="fileupload-wrapper">
            <div className="section-card">
                <h1 className="fileupload-title">PDF로 문제 만들기</h1>
                <div className="fileupload-desc" style={{whiteSpace: 'nowrap'}}>
                  PDF 파일을 업로드하여 자동으로 문제를 생성하세요
                </div>
                <div
                    className={`drop-area${isDragging ? ' dragging' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <p>파일을 드래그하여 업로드</p>
                    <div className="drop-or">또는</div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept="application/pdf"
                        multiple
                        style={{ display: 'none' }}
                    />
                    <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="upload-btn"
                        disabled={files.length === 0}
                    >
                        + 컴퓨터에서 파일 선택
                    </button>
                    <div className="fileupload-note">PDF 파일만 지원됩니다</div>
                    {files.length > 0 && (
                        <div style={{width: '100%', marginTop: 10}}>
                            {files.map((file, idx) => (
                                <p className="file-name" key={file.name + idx}>
                                    <span className="file-name-text">선택된 파일: {file.name}</span>
                                    <button className="remove-file-btn" onClick={() => handleRemoveFile(idx)} title="파일 삭제">
                                        ×
                                    </button>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="options-card">
                    <label htmlFor="questionCount">문제 개수</label>
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
                <button
                    className={`generate-btn${files.length > 0 ? ' active' : ''}`}
                    onClick={handleSubmit}
                    disabled={files.length === 0}
                >
                    문제 만들기
                </button>
            </div>
        </div>
    );
};

export default FileUpload;