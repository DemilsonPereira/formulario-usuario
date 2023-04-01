import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { TableStyle, TheadStyle, TrStyle, ThStyle, TbodyStyle, TdStyle } from './ListForm.Style';

function ListForm() {
    const ref = useRef();

    const [usuarios, setUsuarios] = useState([]);
    const [onEdit, setOnEdit] = useState({
        nome: "",
        email: "",
        fone: null,
        data_nascimento: ""
    });

    useEffect(() => {
        const buscarTodosUsuarios = async () => {
            try {
                const listarUsuarios = await axios.get("http://localhost:3333/usuarios");
                setUsuarios(listarUsuarios.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
            } catch (err) {
                toast.error(err);
            }
        }
        buscarTodosUsuarios();
    }, []);

    useEffect((onEdit) => {
        if (onEdit) {
            const usuario = ref.current;

            usuario.nome.value = onEdit.nome;
            usuario.email.value = onEdit.email;
            usuario.fone.value = onEdit.fone;
            usuario.data_nascimento.value = onEdit.data_nascimento;
        }
    }, [onEdit]);

    const handleEdit = async (id) => {
        try {
            await axios.put("http://localhost:3333/usuarios/" + onEdit.id, onEdit);
            window.location.reload();
        } catch (error) {
            toast.error(err);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:3333/usuarios/" + id);
            window.location.reload();
        } catch (error) {
            toast.error(err);
        }
    }

    return (
        <TableStyle>
            <TheadStyle>
                <TrStyle>
                    <ThStyle>Nome</ThStyle>
                    <ThStyle>E-mail</ThStyle>
                    <ThStyle onlyWeb>Fone</ThStyle>
                    <ThStyle></ThStyle>
                    <ThStyle></ThStyle>
                </TrStyle>
            </TheadStyle>
            <TbodyStyle>
                {usuarios.map((item, i) => (
                    <TrStyle key={i}>
                        <TdStyle width="30%">{item.nome}</TdStyle>
                        <TdStyle width="30%">{item.email}</TdStyle>
                        <TdStyle width="20%" onlyWeb>{item.fone}</TdStyle>
                        <TdStyle width="5%"><FaEdit onClick={() => handleEdit(item)} /></TdStyle>
                        <TdStyle width="5%"><FaTrash onClick={() => handleDelete(item.id)} /></TdStyle>
                    </TrStyle>
                ))}
            </TbodyStyle>
        </TableStyle>
    )
}

export default ListForm
