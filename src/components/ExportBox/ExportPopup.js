import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import Button from 'components/Buttons/Button';
import "react-responsive-modal/styles.css";


export default function ReportExport() {
  const [open, setOpen] = useState(false);
  const [timeFrame, setTimeFrame] = useState('day');
  const [dataType, setDataType] = useState('luu_luong_tai');
  const [fileFormat, setFileFormat] = useState('csv');

  const onCloseModal = () => {
    setOpen(false);
  };

  const handleTimeFrameChange = event => {
    setTimeFrame(event.target.value);
  };

  const handleDataTypeChange = event => {
    setDataType(event.target.value);
  };

  const handleFileFormatChange = event => {
    setFileFormat(event.target.value);
  };

  const handleExportReport = () => {
    onCloseModal();
  };

  return (
    <>
      <button
        className="bg-blueGray-600 mt-2 ml-2 active:bg-blueGray-400 text-white font-bold uppercase sm:text-xs text-small px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setOpen(true)}
      >
        export report
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
        <div className="p-4">
          <h2 className="text-xl font-medium mb-4">Option:</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="my-4">
                <label htmlFor="timeFrame" className="mr-4 font-medium">
                  Time scale:
                </label>
              </div>
              <div className="my-4">
                <select
                  id="timeFrame"
                  className="border rounded  py-2"
                  value={timeFrame}
                  onChange={handleTimeFrameChange}
                >
                  <option value="days">Day</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
              </div>
              <div>
                <label htmlFor="dataType" className="mr-8 font-medium">
                  Data type:
                </label>
              </div>
              <div>
                <select
                  id="dataType"
                  className="border rounded px-2 py-2"
                  value={dataType}
                  onChange={handleDataTypeChange}
                >
                  <option value="Load">Load</option>
                  <option value="Consume_Power">Consume Power</option>
                  <option value="Electrical_Bill">Electrical Bill</option>
                </select>
              </div>
              <div className="my-4">
                {' '}
                <label htmlFor="fileFormat" className="mr-5 font-medium">
                  File format:
                </label>
              </div>
              <div className="my-4">
                <select
                  id="fileFormat"
                  className="border rounded py-2"
                  value={fileFormat}
                  onChange={handleFileFormatChange}
                >
                  <option value="csv">CSV</option>
                  <option value="excel">Excel</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Button name="Export Report" onClick={handleExportReport} />
              </div>
              <div>
                <Button name="Close" onClick={onCloseModal} />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
