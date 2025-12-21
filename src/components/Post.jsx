const names = ["Maximilian", "Menual"];

function Post() {
  // eslint-disable-next-line react-hooks/purity
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{chosenName}</p>
      <p>This is a Post component.</p>
    </div>
  );
}

export default Post;
