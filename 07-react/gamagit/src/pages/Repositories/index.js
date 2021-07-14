import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        let repositoryNames = localStorage.getItem('repositoryNames');
        repositoryNames = JSON.parse(repositoryNames);
        setRepositories(repositoryNames);
        // localStorage.clear();
    }, []);

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