import axios from 'axios';
import React, { useRef, useState } from 'react'
import { FormContainerStyle, InputAreaStyle, InputStyle, LabelStyle, ButtonStyle } from './Form.Style'

function Form() {
    const ref = useRef();
    const [usuarios, setUsuarios] = useState({
        nome: "",
        email: "",
        fone: null,
        data_nascimento: ""
    });

    const manipuladorDeMudanças = (e) => {
        setUsuarios((visualizacao) => ({ ...visualizacao, [e.target.name]: e.target.value }));
    }

    const manipularClique = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3333/usuarios", usuarios);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <FormContainerStyle ref={ref}>
            <InputAreaStyle>
                <label>Nome</label>
                <InputStyle onChange={manipuladorDeMudanças} name='nome' required />
            </InputAreaStyle>

            <InputAreaStyle>
                <label>E-mail</label>
                <InputStyle onChange={manipuladorDeMudanças} name='email' type='email' required />
            </InputAreaStyle>

            <InputAreaStyle>
                <label>Telefone</label>
                <InputStyle onChange={manipuladorDeMudanças} name='fone' />
            </InputAreaStyle>

            <InputAreaStyle>
                <LabelStyle>Data de Nascimento</LabelStyle>
                <InputStyle onChange={manipuladorDeMudanças} name='data_nascimento' type='date' required />
            </InputAreaStyle>

            <ButtonStyle type='submit' onClick={manipularClique}>Salvar</ButtonStyle>
        </FormContainerStyle>
    )
}

export default Form
