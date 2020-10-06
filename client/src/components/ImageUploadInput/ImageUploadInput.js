import React from 'react';

const ImageUploadInput = (props) => {

    const node = window.document.getElementById('imagePreview');

    /**
     *
     * @description Handle load photos
     */
    const onChange = (e) => {
        const {input: {onChange}} = props;
        const file = e.target.files[0];
        const imageType = /image.*/;
        if (file) {
            if (!file.type.match(imageType)) {
                e.target.value = '';
            } else {
                onChange(file);
                const reader = new FileReader();
                reader.onload = () => {
                    const img = document.createElement('img');
                    img.classList.add(`${props.classes.commonImgStyle}`)
                    img.setAttribute("src", `${reader.result}`);
                    node.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const {isEdit, filesList} = props;
    const {uploadContainer, inputContainer} = props.classes;

    return (
        <div className={uploadContainer}>
            <div className={inputContainer}>
                <span>Support only images (*.jpg, *.png, *.jpeg)</span>
                <input
                    id='fileInput'
                    type='file'
                    accept='.jpg, .png, .jpeg'
                    onChange={onChange}
                />
                <label htmlFor="fileInput">
                    {
                        isEdit ? "Can add one more picture"
                            : filesList.length === 0 ? 'Chose the main avatar'
                                : 'Can chose one more picture'
                    }
                </label>
            </div>
            <div id='imagePreview'/>
        </div>
    )
};

export default ImageUploadInput;