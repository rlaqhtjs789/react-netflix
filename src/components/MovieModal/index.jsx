import React, { useRef } from 'react'
import "./MovieModal.css";
import useOnClickOutside from '../../hooks/useOnclickOutside';

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen
}) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content"></div>
          <p className="modal__details">
            <span className="modal__user-percentage">
              {Math.floor(vote_average * 10)}% Match
            </span>
            <span className="modal__release-date">
              {release_date ? release_date : first_air_date}
            </span>
            <span className="modal__quality">HD</span>
          </p>
          <h2 className="modal__title">{title ? title : name}</h2>
          <p className="modal__overview">{overview}</p>
        </div>
      </div>
    </div>
  );
}
