import React, { Component } from 'react';
import '../App.css';

/* REVERAL */
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip';

/* BOOTSTRAP */
import Container from 'react-bootstrap/Container'

/* IMAGENS */
import um from '../img/one.png'
import dois from '../img/two.png'
import tres from '../img/three.png'
import quatro from '../img/four.png'
import cinco from '../img/five.png'
import seis from '../img/six.png'
import sete from '../img/seven.png'
import oito from '../img/eight.png'
import nove from '../img/nine.png'
import dez from '../img/ten.png'
import onze from '../img/eleven.png'
import doze from '../img/twelve.png'
import treze from '../img/thirteen.png'
import quatorze from '../img/fourteen.png'
import quinze from '../img/fifteen.png'
import dezeseis from '../img/sixteen.png'
import dezesete from '../img/seventeen.png'

class Obj extends Component {
    render(){
    return( 
    <Container>
        <Flip left>
            <h1 id="aaa" >Objetivos</h1>
        </Flip>

        <ul class="box">
            <Fade left>
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={um}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first1">
                            <p>Erradicação da Pobreza</p>
                        </div>
                        <div class="second parag">
                            <p>Acabar com a pobreza em todas as suas formas, em todos os lugares</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem"  src={dois}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first2">
                            <p>Fome Zero e Agricultura Sustentável</p>
                        </div>
                        <div class="second parag">
                            <p>Acabar com a fome e alcançar a segurança alimentar</p>
                        </div>
                    </div>
                </li>
                
                <li>
                    <div class="img-box">
                        <img  alt="imagem" src={tres}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first3">
                            <p>Saúde e Bem-Estar</p>
                        </div>
                        <div class="second parag">
                            <p>Assegurar uma vida saudável e promover o bem-estar para todos</p>
                        </div>
                    </div>
                </li>
            </Fade>
        </ul>

        <ul class="box">
            <Fade right>
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={quatro}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first4">
                            <p>Educação de Qualidade</p>
                        </div>
                        <div class="second parag">
                            <p>Assegurar a educação e promover oportunidades de aprendizagem</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={cinco}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first5">
                            <p>Igualdade de Gênero</p>
                        </div>
                        <div class="second parag">
                            <p>Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={seis}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first6">
                            <p>Água Potável e Saneamento</p>
                        </div>
                        <div class="second parag">
                            <p>Assegurar a disponibilidade e a gestão sustentável da água e saneamento para todos</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={sete}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first7">
                            <p>Energia Acessível e Limpa</p>
                        </div>
                        <div class="second parag">
                            <p>AAssegurar o acesso sustentável, moderno e a preço acessível para todos</p>
                        </div>
                    </div>
                </li>
            </Fade>

        </ul>

        <ul class="box">
            <Fade left>
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={oito}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first8">
                            <p>Trabalho Decente e Crescimento Econômico</p>
                        </div>
                        <div class="second parag">
                            <p>Promover o crescimento econômico inclusivo e sustentável</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={nove}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first9">
                            <p>Indústria, Inovação e Infraestrutura</p>
                        </div>
                        <div class="second parag">
                            <p>Promover a industrialização inclusiva e sustentável e fomentar a inovação</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={dez}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first10">
                            <p>Fome Zero e Agricultura Sustentável</p>
                        </div>
                        <div class="second parag">
                            <p>Redução da Desigualdades</p>
                        </div>
                    </div>
                </li>
            </Fade>
        </ul>

        <ul class="box">
            <Fade right>
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={onze}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first11">
                            <p>Cidades e Comunidades Sustentáveis</p>
                        </div>
                        <div class="second parag">
                            <p>Tornar as cidades e os assentamentos humanos inclusivos e seguros</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={doze}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first12">
                            <p>Consumo e Produção Responsáveis</p>
                        </div>
                        <div class="second parag">
                            <p>Assegurar padrões de produção e de consumo sustentáveis</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={treze}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first13">
                            <p>Ação Contra a Mudança Global do Clima</p>
                        </div>
                        <div class="second parag">
                            <p>Tomar medidas urgentes para combater a mudança do clima e seus impactos</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={quatorze}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first14">
                            <p>Vida na Água</p>
                        </div>
                        <div class="second parag">
                            <p>Promover o uso sustentável dos recursos marinhos para o desenvolvimento sustentável</p>
                        </div>
                    </div>
                </li>
            </Fade>

        </ul>

        <ul className="box">
            <Fade left>
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={quinze}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first15">
                            <p>Vida Terrestre</p>
                        </div>
                        <div class="second parag">
                            <p>Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={dezeseis}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first16">
                            <p>Paz, Justiça e Instituições Eficazes</p>
                        </div>
                        <div class="second parag">
                            <p>Promover sociedades inclusivas e justas para o desenvolvimento sustentável</p>
                        </div>
                    </div>
                </li>
                
                <li> 
                    <div class="img-box">
                        <img  alt="imagem" src={dezesete}  />
                    </div>
                    <div class="efeito">
                        <div class="first" id="first17">
                            <p>Parcerias e Meios de Implementação</p>
                        </div>
                        <div class="second parag">
                            <p>Fortalecer e revitalizar a parceria global para o desenvolvimento sustentável</p>
                        </div>
                    </div>
                </li>
            </Fade>
        </ul>
    </Container>
    )
    }
}

export default Obj;