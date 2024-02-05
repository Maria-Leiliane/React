import Popup from 'reactjs-popup';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
             <Popup
                trigger={
                    <button 
                        className='shadow-md
                        border p-2 border-slate-900 px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                    <FormularioPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;