const Modal = ({ closeModal, data }: any) => {

  return (
    <div className="h-5/6 w-3/6">
      <img src={data?.urls.regular} alt={data?.alt_description} onClick={() => closeModal()} className="cursor-pointer w-full h-full rounded-lg"/>
    </div>
  );
};

export default Modal;
