
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';



  

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function Addplant() {

  ////picture upload start
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([ ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  
  ////picture upload close



  
  return (
    <>
      <h1 className='text-3xl text-center'>Add Your plant</h1>

      <div className='content-center md:p-3 mt-7' >


        <h1 className='pt-3 text-xl md:p-2'>Enter Name</h1>
        <input className='inline p-2 border-2 rounded-xl w-[100%]' type="text" placeholder='Product name' />

        <h1 className='pt-3 text-xl md:p-2'>Enter Price</h1>
        <input className='inline p-2 border-2 rounded-xl w-[100%]' type="text" placeholder='Product price' />

        <h1 className='pt-3 text-xl md:p-2'>Choose category</h1>
        <select className='inline p-2 border-2 rounded-xl w-[100%]'>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
        </select>

        <h1 className='pt-3 text-xl md:p-4'>Product Description</h1>
        <ReactQuill theme="snow" />
        {/* https://github.com/zenoamaro/react-quill  // how to use see here */}

        <h1 className='pt-3 text-xl md:p-4'>Upload your gallery</h1>
        <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
        
      <button class="bg-green-500 hover:bg-green-700 md:mt-7  text-white font-bold py-2 px-4 rounded">
    Save Plant
  </button>


          
      </div>
    </>
  )
}

export default Addplant