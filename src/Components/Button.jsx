const Button = ({ text = 'Explore All', color = '#7808d0', icon1, icon2 }) => {
  return (
    <div className="button-wrapper">
      <button className="button" style={{ '--clr': color }}>
        <span className="button__icon-wrapper">
          {/* Render icon1 inside a <g> to ensure proper rendering */}
          {icon1 && (
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon-svg"
              width="14"
              height="14"
            >
              <g>{icon1}</g>
            </svg>
          )}

          {/* Render icon2 inside a <g> */}
          {icon2 && (
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon-svg button__icon-svg--copy"
              width="14"
              height="14"
            >
              <g>{icon2}</g>
            </svg>
          )}
        </span>
        {text}
      </button>
    </div>
  );
};

export default Button;
