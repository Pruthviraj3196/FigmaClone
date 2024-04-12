import { exportToPdf } from "@/lib/utils";

const Export = () => (
  <div className='flex flex-col gap-3 px-5 py-3'>
    <h3 className='text-[10px] uppercase'>Export</h3>
    <button
      className='w-full border border-primary-grey-100 hover:bg-primary-green hover:text-primary-black'
      onClick={exportToPdf}
    >
      Export to PDF
    </button>
  </div>
);

export default Export;

