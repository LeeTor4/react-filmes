import React, { Fragment } from 'react';
import Header from './Header';

const Sobre = () => {

	return(
		<Fragment>
			<Header />
			<h3> &nbsp;&nbsp; Como funciona: </h3>
			<p>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				    Na página inicial consta os campos (Titulo) e (Protagonista) para serem preenchidos e após seu preenchimento o usuario terá a opção salvar clicando no 
				       botão salvar.<br /> 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				    Em seguida o filme será mostrado na tabela acima.<br /> 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				    Após cadastrar o filme o usuario terá a opção de fazer sua avaliação clicando no botão avaliar. O qual poderá ser cadastrada uma ou mais avaliações para o mesmo filme.<br /> 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				   Ao conluir o cadastro das avaliações o usuario terá que clicar na opção Filme na barra superior para retornar a tela de cadastro de filmes, a qual mostrará a média das avaliações. <br /> 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				   O Usuário terá a opção de remover o filme clicando em remover.
			</p>
		</Fragment>
	);
}
export default Sobre;


