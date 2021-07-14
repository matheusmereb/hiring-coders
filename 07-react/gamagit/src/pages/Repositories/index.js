import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router';

export default function Repositories() {
    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        let repositoryNames = localStorage.getItem('repositoryNames');
        if (repositoryNames !== null) {
            repositoryNames = JSON.parse(repositoryNames);
        setRepositories(repositoryNames);
        localStorage.clear();
        } else {
            history.push('/');
        }
    }, [history]);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório - { repository }</S.ListItem>
                    )
                }) }
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}