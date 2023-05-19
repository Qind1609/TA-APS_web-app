import React, { useState, useRef } from 'react';
import { Modal } from 'react-responsive-modal';
import Button from 'components/Buttons/Button';
import "react-responsive-modal/styles.css";
import LoadingModal from './LoadingModal';
import {
  useImportDataMutation
} from './services';

let timer = null;
let countTime = 0;

export default function DataImport() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [loadMsg, setLoadMsg] = useState('');
  const inputRef = useRef(null);

  const [importApi] = useImportDataMutation();

  const onCloseModal = () => {
    setOpen(false);
  };

  const props = {
    name: 'file',
    multiple: false,
    beforeUpload: file => {
      //check file type is csv or not
      const isCSV = file.type === 'text/csv';
      if (!isCSV) {
        window.alert('You can only upload CSV file!');
        return false;
      }
      setFile(file);
      return false;
    }
  };

  const handleFileChange = event => {
    console.log(event.target.files);
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event.target.value = null;
    setFile(fileObj);
    setFileName(fileObj.name);
  };

  const handleUploadClick = async () => {
    console.log(file);
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    setFile(null);
    onCloseModal();
    setLoading(true);
    setLoadMsg('Uploading file...');
    timer = setInterval(() => {
      countTime += 1000;
      setLoadMsg(`Uploading file... ${Math.min(100, countTime / 100).toFixed(0)}%`);
    }, 1000);
    try {
      const res = await importApi(formData);
      clearInterval(timer);
      countTime = 0;
      timer = null;
      setLoading(false);
      setLoadMsg('');
      if (res?.data?.success) {
        window.alert(`Import file ${file.name} successfully!`);
        //TODO: reload data to show new data
        global.time = res.data.data.time;
        global.temp = res.data.data.temp;
        global.press = res.data.data.press;
        global.flow = res.data.data.flow;
        global.consumption = res.data.data.consumption;

      } else window.alert("Import file failed!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = event => {
    setFileName(event.target.value);
  };

  const handleBrowseClick = () => {
    //trigger file import box of browser
    inputRef.current.click();
  };

  return (
    <>
      <button
        className="bg-blueGray-600 mt-2 ml-2 active:bg-blueGray-400 text-white font-bold uppercase sm:text-xs text-small px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setOpen(true)}
      >
        Import Data
      </button>

      <Modal
        open={open}
        onClose={onCloseModal}
        onEscKeyDown={onCloseModal}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal'
        }}
      >
        <div className="p-8">
          <h4 className="text-xl font-medium mb-4">Click Browse, to select a file, and then click Upload</h4>
          <form>
            <div className="">
              <div className="my-4">
                <label for = "import"  className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  File CSV:
                </label>
              </div>
              <div className="my-4 flex">
                <input
                  id= "import"
                  type="text"
                  className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounde-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="File Name"
                  value={fileName}
                />
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={inputRef}
                  onChange={handleFileChange}
                />
                <div className="bg-blueGray-600  text-white active:bg-blueGray-400 font-bold uppercase flex justify-between items-center text-xs px-4 py-2  rounded-r shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  onClick={handleBrowseClick}
                >  Browse  </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>
              <Button  name="Upload" onClick={handleUploadClick} />
              </div>
              <div >
                <Button name="Close" onClick={onCloseModal} />
              </div>
            </div>
          </form>
        </div>
      </Modal>
      {isLoading && <LoadingModal message={loadMsg} />}
    </>
  );
}
