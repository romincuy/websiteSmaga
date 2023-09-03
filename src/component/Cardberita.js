
function Cardberita(props) {
  return (
    <div className="container-fluid">
      <div classname="container" style={{ backgroundColor: '#F2F3F4', height: 'auto'}}>
        <div className="row mx-auto">
          <div className="p-2 ">
            <img src={props.image} className="" style={{ height: '15rem', width: '100%'}} />
            <h4>
              <a href="#" className="text-decoration-none text-primary">{props.judulBerita}</a>
            </h4>
            <p>{props.deskripsiBerita}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardberita;
