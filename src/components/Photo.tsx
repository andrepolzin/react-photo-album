export const Photo = ({ data, toggleModal }: any) => {
  return (
    <div>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className="w-full h-full min-w-96 min-h-96 max-h-96 max-w-96 cursor-pointer rounded shadow-2xl"
        onClick={() => toggleModal(data)}
      />
    </div>
  );
};
