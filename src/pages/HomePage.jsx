import Process from '../components/Table/Table.jsx';

function HomePage(){
    const tipo = "Controle de Rotina de PAs"

    return(
        <div>
            <nav>
      {/* <div className='btns'>
          <Buttons text='Rec a Outros Órgãos'/>
          <Buttons text='PSSS'/>
          <Buttons text='Parc. Débito'/>
      </div> */}
      
    </nav>
    
    <h2 className='tipo'>{tipo}</h2>

      <Process />
        </div>
    )
}

export default HomePage;