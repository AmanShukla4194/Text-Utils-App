import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {

    const [Mode, setMode] = useState('light');
    const [Text, setText] = useState('Enable DarkMode');
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const toggleMode = () => {
        if (Mode === 'light') {
            setMode('dark');
            setText('Enable LightMode')
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark Mode has been Enabled", "success");
        }
        else {
            setMode('light');
            setText('Enable DarkMode')
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been Enabled", "success");
        }
    };

    return (
        <>
            <Navbar title="Text-Utils" About="About" Home="Home" mode={Mode} toggleMode={toggleMode} text={Text} />
            <Alert alert={alert} />
            <div className="container my-4" >
                <TextForm showAlert={showAlert} heading="Try Text-Utils - Word Counter | Character Counter | Remove Extra Spaces | Conversion of cases" mode={Mode} />
            </div>
        </>
    );
}
export default App;