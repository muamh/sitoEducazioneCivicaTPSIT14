import React, { useState, useRef, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSpring, to, animated, config } from '@react-spring/web';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { scale, dist } from 'vec-la';
import { useDrag } from 'react-use-gesture';
import { MDBAccordion, MDBAccordionItem, MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardLink, MDBCardOverlay, MDBCardSubTitle, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselCaption, MDBCarouselItem, MDBCheckbox, MDBClientOnly, MDBCol, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBFile, MDBFooter, MDBIcon, MDBInput, MDBInputGroup, MDBListGroup, MDBListGroupItem, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBProgress, MDBProgressBar, MDBRadio, MDBRange, MDBRipple, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList, MDBSpinner, MDBSwitch, MDBTable, MDBTableBody, MDBTableHead, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane, MDBTextArea, MDBTooltip, MDBTypography, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import styles from './App.css';


const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

const App = () => {
  const [parallax, setParallax] = useState(null);

  useEffect(() => {
    if (parallax) {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [parallax]);



  const [{ pos }, api] = useSpring(() => ({ pos: [1350, 500] }));
  const [{ angle }, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }));

  const movimento = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      api.start({
        pos,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      });

      if (dist(xy, previous) > 10 || !down)
        angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) });
    },
    { initial: () => pos.get() }
  );

  return (
    <div style={{ width: '100%', height: '175%', background: '#253237' }}>
        <Parallax ref={setParallax} pages={5}>
          <ParallaxLayer offset={2} speed={0} factor={1.25} style={{ backgroundColor: '#805E73' }} />
          <ParallaxLayer offset={3} speed={0} factor={1.25} style={{ backgroundColor: '#87BCDE' }} />
          <ParallaxLayer offset={4} speed={0} factor={1.25} style={{ height: '100%' }} />

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={3.5}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={1}
            factor={3.5}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          > 
            <MDBTypography variant='h1' className='display-1' style={{ fontWeight: 'bold', fontFamily: 'slab-serif', fontSize: '5rem' }}>IL DIRITTO DI CONTARE</MDBTypography>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={1}
            factor={3.5}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />
          

          <ParallaxLayer offset={2.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '12%', marginLeft: '87%' }} alt="satellite" />
          </ParallaxLayer>

          <ParallaxLayer offset={3.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite')} style={{ width: '12%', marginLeft: '1%' }} alt="satellite" />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud1" />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud2" />
          </ParallaxLayer>

          <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud3" />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud4" />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud5" />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud6" />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud7" />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud8" />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud9" />
          </ParallaxLayer>

          <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="cloud10" />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="cloud11" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.5}
            speed={-0.4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <img src={url('earth')} style={{ width: '60%' }} alt="earth" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.scrollTo(2)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <section className="mt-3" style={{ width:'100%', marginBottom: '2%', marginTop: '200%'}} block= 'true'>
              <MDBContainer className="" style={{ width:'80%', height: '80%'  }} fluid>
                <MDBRow className="justify-content-center align-items-center"  >
                  <MDBCol className="mb-4 mb-lg-0" >
                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                      <MDBRow className="g-0" >
                        <MDBCol md="4" className="gradient-custom text-center text-white"
                          style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' , fillOpacity:0.5 }}>
                          <MDBCardImage src="https://www.ibs.it/images/9788869053436_0_536_0_75.jpg"
                            alt="Avatar" className="object-fit-cover" fluid 
                            style={{ width: '100%', height: '100%', 
                            objectFit: 'cover'}}/>
                        </MDBCol>
                        <MDBCol md="8">
                          <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">IL DIRITTO DI CONTARE</MDBTypography>
                            <hr className="mt-0 mb-2" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Anno</MDBTypography>
                                <MDBCardText className="text-muted">2016</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Stato</MDBTypography>
                                <MDBCardText className="text-muted">Stati Uniti d'America</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">IMDB</MDBTypography>
                                <MDBCardText className="text-muted">7,8</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">GENERI</MDBTypography>
                                <MDBCardText className="text-muted">Drammatico, Romanzo</MDBCardText>
                              </MDBCol>
                            </MDBRow>

                            <MDBTypography tag="h6">TRAMA</MDBTypography>
                            <hr className="mt-0 mb-2" />
                            <MDBRow className="pt-1">
                              <MDBCol className="mb-3">
                                <MDBCardText className="text-muted">
                                La storia è ambientata all'inizio degli anni '60, durante la corsa allo spazio 
                                tra gli Stati Uniti e l'Unione Sovietica. Il lungometraggio segue le vite di 
                                Katherine Johnson, incaricata di calcolare le traiettorie di volo, Dorothy 
                                Vaughan, pionieristica programmatrice di computer, e Mary Jackson, futura prima 
                                ingegnere donna della Nasa, tre donne afroamericane che lavorano al Langley 
                                Research Center della NASA in Virginia. Nonostante la segregazione razziale e 
                                di genere degli Stati Uniti di quell’epoca, le tre donne protagoniste non si 
                                sono arreso e hanno combattuto duramente contro le ingiustizie per dare il loro 
                                significativo contributo alla Missione Mercury-Atlas 6 e al Programma Apollo.
                                </MDBCardText>
                              </MDBCol>
                            </MDBRow>

                            <MDBTypography tag="h6">RIFLESSIONE PERSONALE</MDBTypography>
                            <hr className="mt-0 mb-2" />
                            <MDBRow className="pt-1">
                              <MDBCol className="">
                                <MDBCardText className="text-muted">
                                Una delle riflessioni più significative che abbiamo potuto apprendere è il 
                                concetto di giustizia sociale e lotta per i diritti civili, in quanto mette 
                                in luce le lotte che le persone di colore, soprattutto donne, hanno dovuto 
                                affrontare per ricevere diritti e uguaglianza. Le protagoniste di questo 
                                film si ribellano e trovano la forza di parlare, per far sentire la loro 
                                voce anche a rischio delle loro stesse vite.
                                <br/>
                                Il cambiamento richiede coraggio e impegno costante. Le protagoniste del film 
                                ne sono un esempio.
                                <br/>
                                Per concludere il film ci fa riflettere sulle ingiustizie del passato e a 
                                considerare il nostro ruolo nel raggiungere un futuro di uguaglianza e rispetto.

                                </MDBCardText>
                              </MDBCol>
                            </MDBRow>

                            <div className="d-flex justify-content-start">
                              <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                              <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                              <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                            </div>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => parallax.scrollTo(3)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          > 
            <MDBTypography variant='h1' className='display-1' style={{marginTop: '-40%', font: 'bold', color: 'black'}}>TEMATICHE DEL FILM</MDBTypography>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => parallax.scrollTo(3)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MDBRow center style={{marginTop: '2%'}} className='align-items-stretch'>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://cdn.skuola.net/w1200h640/news_foto/2021/12/discriminazione-razziale.jpg' fluid />
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Discriminazione razziale e di genere</MDBCardTitle>
                    <MDBCardText>
                      Il film affronta l’importante tematica della discriminazione razziale e di genere, concentrandosi 
                      principalmente su quella degli anni ‘60 durante il periodo delle segregazione razziale. Il film mostra 
                      la lotta e le difficoltà che le donne hanno dovuto affrontare e la loro determinazione in ciò per poter 
                      far avverare i propri sogni.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://static.docsity.com/documents_first_pages/2020/11/02/a0c78495d3d6c3b19dc496b0c58fea74.png' fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>La sfida contro il progresso</MDBCardTitle>
                    <MDBCardText>
                      Il film celebra l'emancipazione delle donne e delle minoranze nei campi scientifici. 
                      Katherine Johnson, Dorothy Vaughan e Mary Jackson mostrano le loro capacità anche 
                      nell’affrontare il progresso tecnologico, non lasciandosi 
                      scoraggiare ma, al contrario utilizzando il progresso tecnologico come una risorsa per 
                      raggiungere nuovi traguardi.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://www.certidiritti.org/wp-content/uploads/2020/11/diversita-e-uguaglianza-1024x768.png' fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Importanza della diversità</MDBCardTitle>
                    <MDBCardText>
                      Il film mostra come l'importanza della diversità e dell'inclusione nell'ambiente 
                      lavorativo, le differenze culturali e di genere possano portare a soluzioni innovative 
                      e creative.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={3}
            speed={0.1}
            onClick={() => parallax.scrollTo(4)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          > 
            <MDBTypography variant='h1' className='display-1' style={{marginTop: '-40%', font: 'bold'}}>INNOVAZIONI DEI PERSONAGGI</MDBTypography>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.1}
            onClick={() => parallax.scrollTo(4)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MDBRow center style={{marginTop: '2%'}} className='align-items-stretch'>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://www.gedistatic.it/content/gnn/img/lastampa/2020/02/24/190736050-d506846f-4ac1-41f7-a661-9c96617ee498.jpg' fluid />
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Katherine Johnson</MDBCardTitle>
                    <MDBCardText>
                      Una straordinaria matematica e fisica che ha calcolato le traiettorie di molte
                      missioni spaziali, tra cui quella storica di John Glenn, il primo americano a orbitare 
                      intorno alla Terra. I suoi calcoli accurati hanno contribuito al successo delle missioni 
                      spaziali e sono fondamentali per la sicurezza degli astronauti.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://scienzapertutti.infn.it/images/stories/scienziati/1_vaughan_NASA.jpg' fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Dorothy Vaughan</MDBCardTitle>
                    <MDBCardText>
                      La prima supervisore afroamericana della NASA. Ha svolto un ruolo fondamentale
                      nel coordinare la transizione dai calcoli manuali alla programmazione digitale e ha imparato 
                      il linguaggio di programmazione Fortran per guidare il primo team della NASA a utilizzare i 
                      computer IBM.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://cdn.britannica.com/23/204323-050-C700CE94/Mary-Jackson.jpg' fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Mary Jackson</MDBCardTitle>
                    <MDBCardText>
                      La prima ingegnera afroamericana della NASA. Ha superato molte difficoltà per essere
                      promossa e ha dato un contributo significativo al programma spaziale lavorando all'analisi
                      aerodinamica e alla progettazione degli aerei.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={0.1}
            onClick={() => parallax.scrollTo(0)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          > 
            <MDBTypography variant='h1' className='display-1' style={{marginTop: '-40%', font: 'bold'}}>PROGETTO SVOLTO DA</MDBTypography>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.5} style={{ pointerEvents: 'none', marginTop: '33%', marginLeft:'83%' }}>
            <img src='https://pngimg.com/uploads/moon/moon_PNG12.png' style={{ width: '12%', }} alt="satellite" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0}
            onClick={() => parallax.scrollTo(0)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MDBRow center style={{marginBottom: '1%', marginTop: '2.5%'}} className='align-items-stretch'>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)', marginTop: '15%'  }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={require('./img/gatti.jpeg')} fluid alt='...' />
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Gatti Michele</MDBCardTitle>
                    <MDBCardText>
                    Esperto analizzatore di film e serie TV, nel progetto si è preso il carico di riassumere il film, 
                    farci una riflessione personale e trovare le tematiche principali trattate nel film.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)', marginTop: '15%'  }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={require('./img/genzini.jpeg')} fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Genzini Giovanni</MDBCardTitle>
                    <MDBCardText>
                    Esperto nelle materie scientifiche, nel progetto si è preso il carico di apprendere e esporre 
                    le invenzioni e innovazioni che le scienziate hanno portato, dandoci una sua riflessione personale.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='3' className='d-flex'>
                <MDBCard style={{ backgroundColor: 'rgba(251, 251, 251, 0.65)', marginTop: '15%' }}>
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={require('./img/hussain.jpeg')} fluid alt='...' />
                    <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Hussain Mohammad Umar</MDBCardTitle>
                    <MDBCardText>
                      Studente di informatica che in questo progetto si è 
                      occupato della realizzazione dell'interfaccia grafica. Per programmare la pagina web, 
                      ha utilizzato il linguaggio di programmazione React JS. N.B. non ha più di 18 anni.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </ParallaxLayer>


          <animated.div
              className={'rocket'}
              {...movimento()}
              style={{
                zIndex: 100,
                position: 'sticky',
                bottom: 10,
                transform: to(
                  [pos, angle],
                  // @ts-ignore
                  ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
                )
              }}
            />
        </Parallax>
      </div>
  );
};

export default App;
