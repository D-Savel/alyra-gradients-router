const GradientFullButton = () => {
  const gradientId = 4
  return (
    <div className="mt-3">
      <a className="btn btn-outline-dark w-100" href={`/gradient/${gradientId}`}>Plein écran</a>
    </div>
  );
};

export default GradientFullButton;