// import clsx from 'clsx';
// import Heading from '@theme/Heading';
import styles from './styles.module.css';
// import Translate, {translate} from '@docusaurus/Translate';
// import '@mdx-js/react'
// import Mermaid from '@theme/Mermaid';
// import Mermaid from '@docusaurus/theme-mermaid/src/theme/Mermaid/index.js';



// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

const DocumentationStructure = () => (
  <div>
    <h1>Documentación del Proyecto</h1>

    <h2>1. Introducción General</h2>
    <ul>
      <li>
        <strong>Descripción del Proyecto:</strong> Explicación general sobre qué es el proyecto de Fidelidad (Mis Puntos Cencosud), sus objetivos y su importancia para la empresa.
      </li>
      <li>
        <strong>Arquitectura del Sistema:</strong> Un diagrama y una descripción de la arquitectura general del sistema, incluyendo componentes clave, cómo se comunican entre sí y tecnologías utilizadas.
      </li>
    </ul>

    <h2>2. Guía de Configuración y Entorno de Desarrollo</h2>
    <ul>
      <li>
        <strong>Requisitos de Software:</strong> Lista de software y herramientas necesarias para trabajar en el proyecto (por ejemplo, IDE, lenguajes de programación, frameworks, dependencias).
      </li>
      <li>
        <strong>Instalación Paso a Paso:</strong> Instrucciones detalladas para instalar el entorno de desarrollo en diferentes sistemas operativos (Windows, macOS, Linux).
      </li>
      <li>
        <strong>Configuración del Proyecto:</strong> Cómo clonar el repositorio, configurar variables de entorno, instalar dependencias y ejecutar el proyecto localmente.
      </li>
    </ul>

    <h2>3. Guía de Despliegue</h2>
    <ul>
      <li>
        <strong>Ambientes:</strong> Descripción de los diferentes entornos (desarrollo, pruebas, producción) y cómo se maneja el despliegue en cada uno.
      </li>
      <li>
        <strong>Proceso de Despliegue:</strong> Guía paso a paso para desplegar cambios, incluyendo herramientas de CI/CD utilizadas.
      </li>
    </ul>

    <h2>4. Pruebas y Calidad del Código</h2>
    <ul>
      <li>
        <strong>Estrategia de Pruebas:</strong> Descripción de las pruebas unitarias, de integración y end-to-end que se utilizan en el proyecto.
      </li>
      <li>
        <strong>Guía de Pruebas:</strong> Cómo ejecutar las pruebas y qué herramientas se utilizan.
      </li>
      <li>
        <strong>Estandarización de Código:</strong> Guía sobre las convenciones de código y linters utilizados para mantener la calidad y consistencia del código.
      </li>
    </ul>

    <h2>5. Guía de Colaboración</h2>
    <ul>
      <li>
        <strong>Uso de Git y Workflow:</strong> Descripción del flujo de trabajo con Git (por ejemplo, Gitflow o trunk-based development), políticas de ramas, cómo hacer pull requests y revisiones de código.
      </li>
      <li>
        <strong>Herramientas de Comunicación:</strong> Herramientas utilizadas para la comunicación del equipo (Slack, Microsoft Teams, etc.) y cómo mantenerse sincronizado con el equipo.
      </li>
    </ul>

    <h2>6. Documentación de APIs y Servicios</h2>
    <ul>
      <li>
        <strong>Endpoints de la API:</strong> Descripción detallada de los endpoints disponibles, incluyendo ejemplos de solicitudes y respuestas.
      </li>
      <li>
        <strong>Servicios Externos y Dependencias:</strong> Lista de servicios externos utilizados y cómo interactuar con ellos.
      </li>
    </ul>

    <h2>7. Manejo de Errores y Solución de Problemas</h2>
    <ul>
      <li>
        <strong>Errores Comunes:</strong> Lista de errores comunes y cómo solucionarlos.
      </li>
      <li>
        <strong>Guía de Debugging:</strong> Herramientas y técnicas recomendadas para el debugging del sistema.
      </li>
    </ul>

    <h2>8. Seguridad y Buenas Prácticas</h2>
    <ul>
      <li>
        <strong>Manejo de Credenciales:</strong> Cómo manejar de forma segura las credenciales y variables sensibles.
      </li>
      <li>
        <strong>Buenas Prácticas de Seguridad:</strong> Recomendaciones para asegurar el código y el entorno.
      </li>
    </ul>

    <h2>9. Recursos Adicionales</h2>
    <ul>
      <li>
        <strong>Glosario de Términos:</strong> Definiciones de términos específicos que se utilizan en el proyecto.
      </li>
      <li>
        <strong>Enlaces a Recursos:</strong> Enlaces útiles a la documentación de las tecnologías que se utilizan en el proyecto.
      </li>
    </ul>

    <h2>10. Onboarding y Primeros Pasos</h2>
    <ul>
      <li>
        <strong>Tareas para Nuevos Desarrolladores:</strong> Una lista de tareas recomendadas para los nuevos desarrolladores para que se familiaricen con el código y el entorno.
      </li>
      <li>
        <strong>Personas de Contacto:</strong> Una lista de personas clave en el equipo a las que se puede acudir para diferentes áreas de soporte (técnico, funcional, etc.).
      </li>
    </ul>
  </div>
);

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> */}
        <h1>¿Bienvenido a Fidelidad</h1>
        <p>En este espacio encontrarás todo lo que necesitas saber sobre la información de nuestro producto.</p>
        <DocumentationStructure/>
        {/* <h1>
          <Translate>¡Bienvenido a Fidelidad!</Translate>
          </h1>
        <p>En este {translate({message:"espacio encontrarás todo"})}  lo que necesitas saber sobre la información de nuestro producto.</p>
        <Mermaid
  value={`graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;`}
/>
<h1>Despues Mermaid</h1> */}
        {/* <MarkdowExample/> */}
      </div>
    </section>
  );
}
