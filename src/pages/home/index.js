import React from 'react';
import Menu from '../../components/menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }} className="App">
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Em A Luz do Demônio, as ocorrências de possessão demoníaca aumentaram nesses últimos anos, de acordo com o Vaticano. Para ajudar a combater o crescente números de casos, a Igreja decidiu abrir uma escola voltada a treinar padres aptos para praticar exorcismos. A Irmã Ann está entre os alunos da escola, e, apesar dela ser uma das únicas mulheres na escola, ela acredita que seu destino é realizar exorcismos. Quando um professor sente seu dom especial, permite que ela seja a primeira freira a estudar e dominar o ritual. Sua própria alma estará em perigo, pois as forças demoníacas que ela luta contra, revelam uma conexão misteriosa com seu passado traumático."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
