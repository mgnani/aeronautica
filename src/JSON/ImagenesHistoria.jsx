/* eslint-disable no-unused-vars */
import { useState } from "react";
import Actividades from "../components/Actividades/Actividades";

const ImagenesHistoria = () => {
  const [actividades, setActividades] = useState([
    {
      id: "01122019",
      fecha: "01.12.2019",
      titulo: "Comenzando el camino",
      texto: "En 2019, exalumnos de la Escuela Técnica de Aeronáutica del Uruguay se unieron para concretar una idea pendiente: la fundación de la Asociación de Ex Alumnos.",
      urlImagen: [
        "https://butwhytho.net/wp-content/uploads/2023/07/Hanamichi-Sakuragi-But-Why-Tho-2.jpg",
        "https://butwhytho.net/wp-content/uploads/2023/07/Hanamichi-Sakuragi-But-Why-Tho-2.jpg",
      ],
    },
    {
      id: "09102020",
      fecha: "09.10.2020",
      titulo: "Firma de los estatutos y posterior firma del libro de honor",
      texto: "El 9 de octubre de 2020,con fecha de 10 de octubre, en presencia de los socios fundadores, de la Comisión Directiva conformada por el Presidente, Eduardo Oroná, la Secretaria Karen Morales y el Tesorero Ramón Ramírez, autoridades de la ETA y de la escribana se llevó a cabo la lectura, firma de los estatutos y posterior firma del libro de honor.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc98wMEqLSLC0KFW05dtOs_wrrWmz2qynP_RkDxQBwaYaJwshp7SQkiuqkqnhbI_SMA2q0cx647mWmPDPntv3icwF-w1rUQJGecbobg0a6gp6m07hvAgjgw5C3jmmHHbSqqZsnvLgDVhfX2uRPKIlgTw=w720-h404-s-no?authuser=0",//https://photos.app.goo.gl/TMV1pf7TCMYeit6X8
        "https://lh3.googleusercontent.com/pw/AIL4fc-gVpxFUAkJdyh6B9EHlY455ddupf6sd0HFmMmbSl19vRFOs6Jf0FWpkaGaRWUng7Sn68pLhTkPvyxim-ED0i02wzJgAWI9G_Q_1NOiXK8tNdQbNV5R86SYvpU298_1OI_rK4sohsREpnLkj4Ob2_Qm=w720-h404-s-no?authuser=0",//https://photos.app.goo.gl/ZgTXVqAwzjQn8bj59
      ],
    },
    {
      id: "29102020",
      fecha: "29.10.2020",
      titulo: "Visita al Comandante en Jefe",
      texto: "Visita al Comandante en Jefe",
      urlImagen: ["https://lh3.googleusercontent.com/pw/AIL4fc8o4H_pDr2lOEgtuOHb2r70Eaq0spZHGAcyqD4N2up2lcD0gjvBeUiFr9ce3e-UwF2LeDuGjTV5xwTtG3E-pAVsX21bwgyRBNqYOI9Ia969Q0UKQzPA3rLHR3cBieQXNkuBQ8oq7dhAzcW9laV1zbyD=w649-h487-s-no"],//https://photos.app.goo.gl/FkizncjrzSBVfYfM7
    },
    {
      id: "13082021",
      fecha: "13.08.2021",
      titulo: "Propuesta de Comodato para el Terreno 'El Nogal' ante la FAU",
      texto:
        "Se presenta formalmente ante la FAU el interés para la obtención de un comodato del terreno ubicado en Cno Pérez “El Nogal.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc8B5Jh8Dm99F8Xuv7IkfpkyIBzBao2AO_6Ll8DVHUAny0mvN32UyHPM4w-hmCYgGSjkgk8sZAz0ip46t_1SGHK1X5aYFW-s56oIJK106Inmh1HhOr7PYkxOp0m6G7twGqKqQF-eMVMOILZC0wMnStXc=w649-h376-s-no",//https://photos.app.goo.gl/PxcLatbQR4wj3Ko36
        "https://lh3.googleusercontent.com/pw/AIL4fc9CRXCXD-s0A3PhwZYttbrXR3P3sWaZesmUGuQgBqxSssUsX5PP-e4UNjfKRhS6cJk2iIut4CeDDh9WzONcdeNy34FiSYUHyTu4uYDLoSUXKVNxngcZKCAOyRLasI52_zpSuIfqDAJI5B8HH5-K4TB6=w649-h564-s-no",//https://photos.app.goo.gl/B35KELfhMidq9CgJ6
        "https://lh3.googleusercontent.com/pw/AIL4fc-oKUF2xo06uqs6XGdIQJ5miVSfNK5iS8FwavTFclYM9oGipCCIAcAPogh7m5sBh2GchXH2sYfTG_4rWmh_2BXkXW6TeFI2WrDHcEl83prZaTZs0sZG1m66y8a_01XVW6wMzRTl7dkesoqtlzKxFcAN=w649-h542-s-no",//https://photos.app.goo.gl/cy2xpQDNVvpqDiB67
      ],
    },
    {
      id: "27082021",
      fecha: "27.08.2021",
      titulo: "Personería Jurídica 486/2020 Aprobada por MEC",
      texto: "Según resolución MEC se aprueba la personería jurídica 486/2020.",
      urlImagen: ["https://lh3.googleusercontent.com/pw/AIL4fc_sh7RnWUzIdw7_9W-2mrVnjRqId2dkrSiFn6def3vYRQh8XGLv3KgeQQuCN0TeUTl0G8xpxEcwOKRq4HnYdUbN1siDQWQ3s5-CcaMny6iWMIJ_YzDx9KSadpW_JXofhfgA8JidncpRrEx260XlaRx9=w508-h635-s-no"],//https://photos.app.goo.gl/ocrqqTa23oD5k3F66
    },
    {
      id: "10102021",
      fecha: "10.10.2021",
      titulo: "Primer aniversario",
      texto:
        "El Director de la ETA Cnel (Av) Heriberto Gancio entrega al Presidente E. Oroná una placa en conmemoración por el 1er aniversario.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc-YY7lQc9lgb3_v8eoUfF8n0vXTxoBAqReFo47SpycRu_NTuOFtXxtC7N6ezbImezBWV4XboRQD4RLSxyrmjjYUw04b6mfxK4JiappxA5UjQFWoqZykfdH7PFT3DCTFJxbz8X91ALF70Vo8ygOBJXYt=w524-h635-s-no",//https://photos.app.goo.gl/tSs3rtoc4SkbhVtk6
        "https://lh3.googleusercontent.com/pw/AIL4fc-0AG3ecIwt16kreQVWm6ObRfS6SilbY-XCM3uCRaAdZiteIqdTYv9daEZ1PXkpkM97wm1YmYbHHBpBX9eGbdYFdR6g7kH8Bx9zm5HCnj6bi-wWgblZ3l6scaccUUkY7XaMfNTLoOmuE1-KCqFWZXFM=w649-h487-s-no",//https://photos.app.goo.gl/71rFietAk3MMNKU58
      ],
    },
    {
      id: "25102021",
      fecha: "25.10.2021",
      titulo: "Debut Histórico: Exalumnos de la ETA en Acto Oficial",
      texto:
        "Por primera vez, exalumnos de la ETA desfilan en un acto oficial.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc-bgk-D8RxAlNzftwiLf0EzuoBoPe3TB1wOkhcC43aA3mwLF_ncJuu-0AFR5fX2zpR8NtD9PN5xCVgXVAnkQb9I3o_YGlKc8v9-o-jEIZkwPD0WiXC3fXq7TprRh2N7zRSRA9toJwLFDl-dZs05XjJM=w649-h434-s-no",//https://photos.app.goo.gl/pMzJo4ELpiynGXDLA
        "https://lh3.googleusercontent.com/pw/AIL4fc9Yjqc4ddL12UiiloZYH_mBvlv7PHXWVvBjGnYX0TOVlvtF2y3RHSB8Tj2xsfqutvf_GtecVu5IHLdn5jESNPlyUXGK58tIFBZFBT9XQ-5a0ADhr3yZpHuPc_Js-EtqL7gBVJlahKezgJAFvhPjAE4s=w649-h488-s-no",//https://photos.app.goo.gl/icrPhh96jfCSj8rP6
        "https://lh3.googleusercontent.com/pw/AIL4fc_FqbdF38RqoEGQJIz-4oB8sUd5i55xnc-8rGqjsdPGgZMXmKlH6sTyr1ANuXl48zhBH6yA0n-LAXYWR8UgJ_jDSJVxmrL4_94tKTpn24-8S6oTbSkDZBO21_HuUDmgUcgQ22ATR25U7l12Rg01HdVd=w649-h433-s-no",//https://photos.app.goo.gl/YqPwYjVDWmqmuVrn9
      ],
    },
    {
      id: "04112021",
      fecha: "04.11.2021",
      titulo: "Almuerzo de Camaraderia",
      texto: "Primer Almuerzo de Camaraderia.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc9CyxzATtrtB_-pPGuMaBrsik7W8iHtCD4x7qjzmViqN5iSDpUKSOr_l0vGJelfeCJ9qC1PooA7SwjQRcMtxzT7Xnmd7H7psOtvIwrpH1DOgkx-oAVYOsaReVsL5hSpvm_TPD2ErvHlSmgy_S_a6kgv=w649-h487-s-no",//https://photos.app.goo.gl/hKfuU7QRwqWppCkh6
        "https://lh3.googleusercontent.com/pw/AIL4fc_pqoTdldI_D4mNsBsaVlueBFqJM1KbfwE14DN8VKOC0M26B-qaf8dEf2ppT-11bpKlO4KiOcrNYzbJCOQ7mPySS31eLu0BgYFhqnVz4N7iego_2nXmKrUb_uaf7qHG3W9hzsMjQxTfaHhZFYdzU2-S=w649-h365-s-no",//https://photos.app.goo.gl/KqMrk1NXuJVnNoA69
      ],
    },
    {
      id: "22112021",
      fecha: "22.11.2021",
      titulo: "75 Años de la ETA: Entrega de Placa Conmemorativa",
      texto:
        "Se entrega a la ETA una placa en honor a sus 75 años de fundación.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc8Za3HqGD-zZgfIcNoANLFqioa1Ll9p4rO4WIRWDytvx269ArATMw_v3C8LVAJZ6UT6uYSB9pu2XXuJqwuGY5mxQd7fhGuiKOYrQLAGajBErOFSHTxn_ADMnw1ryDQoMGAfUPOv-MVp_g37mnbjd7Vt=w649-h487-s-no",//https://photos.app.goo.gl/ETNqAmpChftVmPNVA
        "https://lh3.googleusercontent.com/pw/AIL4fc9BBHcSol648X0DMorqeeCF_pv8ZJD90krtn4d01k21S3OYvZQvrxBrUIH26vfvHXQlYC2pxTS1kh9MHuukVn474pTWoRFqsTqcK6-idqkHKmocijx7pPbF59iho2FoCmdJnsHz-GgzjLC0QF5PltLS=w649-h487-s-no",//https://photos.app.goo.gl/rfcTjWg9L72X2Jix8
        "https://lh3.googleusercontent.com/pw/AIL4fc88lj4DzbK28Ft4_jTQvpsTMAkbiRivu68MTylXIZcFdB-Ri2nOXvhhfIH9eV2yCuMHNmjS8LH6QE4hkgPJgJzX-M2oqnSpGkr0txX3l7Dg3Cgvhqxppk8Pk9xu1_iixBxKoPYCKn6BREJSKgHUDl4K=w357-h635-s-no",//https://photos.app.goo.gl/6UVjwskogrLDnDNNA
      ],
    },
    {
      id: "08122021",
      fecha: "08.12.2021",
      titulo:
        "Marcos Cardozo: Elegido 'Mejor Compañero' por la Asociación de Ex Alumnos de la ETA",
      texto:
        "Se otorga al alumno A.T2° Marcos Cardozo el premio de la Asociación de Ex Alumnos de la ETA del Uruguay por ser elegido como el mejor compañero por sus pares.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc_epgZHgxpXsWK19cqDznL06iqKJ9NIWOXuiwQEh8-YV0X_d9GA6Mrxi9C9YE9ngrDGhOCuDpG-aab9XdLQwG6FnlyfDUnKgUS8IneHzRMdXqzS5BDs08cVTSn0iurB6pdFhJXp1RUaRBP1g4qyHk7x=w286-h635-s-no",//https://photos.app.goo.gl/Ck5Po9NYzTojxdjv6
        "https://lh3.googleusercontent.com/pw/AIL4fc9ERNfZ1dfCbrebF59HfINNYVKP7XZqWPD_2HGyrFqhAemiOas22sKYkM5jBCp7Iukjpk3YAY2ADbMvhIJDGQVzJTqiOMf3ZMSs0P1xNQSYotKNnB26CRSPonJGLDhfdfdHqu0EG33mH3gw8_LaIsoZ=w649-h292-s-no",//https://photos.app.goo.gl/4h17GRyPxTeRLvGW7
        "https://lh3.googleusercontent.com/pw/AIL4fc_JKzpq3uTH2nm_aWlAyM-4mBTIezGPUIR_2sPS26S9n6k0rZbiX_2TOM7tXkBGr8PTxiE25sc5ywQ6lO21XxndWMu-SaTRV-bpcSxTU03a3mffgO3B30RdK1NVeCsrzd7FTCGBarunTglSopDaTdTQ=w649-h292-s-no",//https://photos.app.goo.gl/3BeRKyQcQ5X2y2sN7
      ],
    },
    {
      id: "19022022",
      fecha: "19.02.2022",
      titulo: "Asamblea sobre Proyecto 'El Nogal'",
      texto:
        "Asamblea Extraordinaria para establecer las directrices del proyecto 'El Nogal'.",
      urlImagen: ["https://lh3.googleusercontent.com/pw/AIL4fc8OfxF2oyV7EhwAEYgQSMknEjEVxmVHgviJ2oW3GDLi0IERzGmSRxMUzTEf4GIXCsyvTNDKmAT0uzXN_GNkznZVBYzTObALRxB5fKFBdx_z07beBK2iiG4n2od_4Rb8yrOJRxDJwXbX-vZtr3jaUNg0=w649-h340-s-no"],//https://photos.app.goo.gl/Ph7NCAXVqL8wfaLK9
    },
    {
      id: "08032022",
      fecha: "08.03.2022",
      titulo: "Inauguración de Cuenta en BROU para Cuotas Sociales",
      texto: "Se inaugura la cuenta en BROU para el pago de cuotas sociales.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc--2tb5B2cPB3pu0xjk0L5UJM-CZKIAmXhwVU5eLyXRjICp7IX5KmWlRXHqO3pz751FEm0dHS09tNrS_xVT0K9D6JU4ZLYAPCFIgakWMrA2QPWJrF0bqqQ75lUWCnzCwJ75U0OZjcAZsO8S1qEnW-ya=w649-h433-s-no",//https://photos.app.goo.gl/k6HDYXxFtKZHC6ZP8
        "https://lh3.googleusercontent.com/pw/AIL4fc_Da4tlESfuGskHRPBO8pn-vAf477czlisSubicbRcpgx5eb4lhqaKf-fE8BKyYjX5ohZEWkcFjJ3sJp4plcgvLCFzYNvT0sgrta0K27XdpN-mywSXmAHCv8WYqkmOu2E5nja0PbsdlYYl_VKebQlsR=w649-h433-s-no",//https://photos.app.goo.gl/X5NeAtCDJGrT9znZ7
      ],
    },
    {
      id: "21032022",
      fecha: "21.03.2022",
      titulo: "Proyecto 'El Nogal': Presentación en CGFA",
      texto: "Presentación del proyecto 'El Nogal' ante el CGFA.",
      urlImagen: ["https://photos.app.goo.gl/XG86NJ57dbhJZuSk97"],//https://photos.app.goo.gl/C8mX6UkHHxGBRBDH6
    },
    {
      id: "02042022",
      fecha: "02.04.2022",
      titulo: "Asamblea Ordinaria.",
      texto: "Asamblea Ordinaria.",
      urlImagen: ["https://lh3.googleusercontent.com/pw/AIL4fc8DkwSUYryL3TKHRCIZbrjxJbzk9mM_XQJ6LxS3lIGSKJesfjojXiCmjYj3hfetw20I7OYVqve_g2ot5oSDEHkBZjQSnlALma6tOqYSyQm_nf8ArqYpMSxGbkokqBVWZ89QN5EoDot1XdnOfH_iGyUy=w649-h327-s-no"],//https://photos.app.goo.gl/atqqwV2cbpXFiWzt8
    },
    {
      id: "07052022",
      fecha: "07.05.2022",
      titulo: "Primeras elecciones",
      texto:
        "Comisión Directiva Presidente Eduardo Oroná - Enrique Portela Secretario Karen Morales - Heber Rodríguez Tesorero Ramón Ramírez - Daniel Barrios. Comisión Fiscal Fernando González - Fernando Cabrera José López - Aldo Marorano Guillermo Arroqui - Daniel Barrios. Comisión Electoral Presidente Carlos Sánchez Secretario Darío Damasco. Vocal José Mario Saravia.",
      urlImagen: ["https://lh3.googleusercontent.com/pw/AIL4fc8DkwSUYryL3TKHRCIZbrjxJbzk9mM_XQJ6LxS3lIGSKJesfjojXiCmjYj3hfetw20I7OYVqve_g2ot5oSDEHkBZjQSnlALma6tOqYSyQm_nf8ArqYpMSxGbkokqBVWZ89QN5EoDot1XdnOfH_iGyUy=w649-h327-s-no"],
    },
    {
      id: "12082022",
      fecha: "12.08.2022",
      titulo: "Construyendo Juntos: La Transformación de Nuestro Complejo",
      texto:
        "Desde el primer trazo hasta la última piedra, esta galería captura la esencia y dedicación de nuestros socios y comitiva en la creación de lo que será el corazón de nuestra asociación. A través de estas imágenes, revivimos cada momento de esfuerzo y colaboración, reflejando la pasión y compromiso de la comunidad de Ex Alumnos ETAUy. Cada avance, cada mejora, nos acerca más a nuestra visión: un espacio común donde el legado aeronáutico y la camaradería perduren.",
      urlImagen: [
        "https://lh3.googleusercontent.com/pw/AIL4fc-7UPmVVw1WM-rJJnCF9m5FSSu7M9kmhUq_8z71n4ruYC1sAsp4jIAGMv5rV1hQu2I7IicfWVkzGEQnwgSN1dEz7yttZYwkMKYR95XLRxWv9qnu4VI41GmuquP9wcvXA7ZeefRkaEi-iv8NzM83kPEL=w649-h487-s-no",//https://photos.app.goo.gl/Kf81cJQW3EbGbq947
        "https://lh3.googleusercontent.com/pw/AIL4fc-fWDsEPzBTMDqLlcwSqil6Hz42W0E3zv_lk6SAV1FG3pOwegDc923uYzMk8fxkZxFAcxve_xrseXv5ENCJP1QuxKYIiZh9UPUhkHIoQM4r2gMqofrrCksjQOi9GrLlcKueLGRQfzNVFhtUOZ4kBYG8=w649-h487-s-no",//https://photos.app.goo.gl/Rj9VkLVQ2LCNDgDd9
        "https://lh3.googleusercontent.com/pw/AIL4fc8Km90b4xLOeZZurqd342OaUAEXOaJc--02N6yt_IRvtbOTEx3ZUiIf6MDwXydtd3T6b59ieaoou-aPa7jgXf5xzw3KZRJgIo2EUXPOMYmbRHXi6pjY4RRWtRpbwOSK9jwlXj9oneBE9f1nbcMZ3be2=w649-h487-s-no",//https://photos.app.goo.gl/mN8mNMHyXrBz768TA
        "https://lh3.googleusercontent.com/pw/AIL4fc9o5ZyKCTiVyCDEILQT_1WmWnu53PQOiKecoBb9YhwCjoe5DuaKblIPZZ1Wrk6htcmaiwMq66lAKsugQHpnq--gxhfqAfOk2O7BaCgNDqxxw_mlomQ=w601-h270-no",//https://photos.app.goo.gl/1j2NAUvEBX2tDxED7
      ],
    },
  ]);

  return (
    <>
      {actividades.map((actividad) => {
        return (
          <Actividades
            key={actividad.id}
            titulo={actividad.titulo}
            fecha={actividad.fecha}
            texto={actividad.texto}
            urlImagen={actividad.urlImagen}
          />
        );
      })}
    </>
  );

};

export default ImagenesHistoria