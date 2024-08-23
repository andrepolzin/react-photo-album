import { useState } from "react";
import Modal from "./Modal";
import { Photo } from "./Photo";

export const PhotoList = ({ photos }: any) => {

  const [open, setOpen] = useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const toggleModal = (photo: any) => {
    setOpen(!open);
    setCurrentPhoto(photo)
  }

  return (
    <>
      <div className="flex flex-wrap gap-20 justify-between">
        {photos.map((photo: any) => (
          <Photo key={photo.id} data={photo} toggleModal={toggleModal}/>
        ))}
      </div>
      <div className={`${open == false ? 'hidden' : ""} flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.8)]`}>
        <Modal closeModal={toggleModal} data={currentPhoto}/>
      </div>
    </>
  );
};
