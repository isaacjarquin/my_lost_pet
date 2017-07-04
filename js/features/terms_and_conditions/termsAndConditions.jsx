const React = require('react')

const TermsAndConditions = React.createClass({
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h4 className='panel-title w3-center'>
            <a data-toggle='collapse' data-parent='#accordion' href='#collapse3'>
            Términos y condiciones</a>
          </h4>
        </div>
        <div id='collapse3' className='panel-collapse collapse'>
          <div className='panel-body'>
            <div className='w3-margin'>
              <h6><b>Aviso legal</b></h6>
              <p>MyLostPet es un sitio web para el intercambio de información sobre mascotas que han sido encontradas y necesitan volver con sus dueños . Al utilizar el sitio de MyLostPet, aceptas y acuerdas estar obligado por los siguientes términos y condiciones. Nada en estas Condiciones debe ser interpretado como una concesión de derechos de terceros beneficiarios.</p>
              <p>Nos reservamos el derecho de modificar o terminar el servicio MyLostPet por cualquier motivo y sin previo aviso, sin responsabilidad para ti, cualquier otro miembro o por terceros. También nos reservamos el derecho a modificar las presentes Condiciones de Servicio de vez en cuando sin previo aviso. El usuario es responsable de revisar regularmente estos Términos y condiciones, para estar informado de cualquier cambio.</p>
              <p>Como parte del proceso de registro de un animal, se pide un email y un numero de telefono. En ningún case este se utilizara para enviar publicidad ni se mostrará a terceros. La web le enviará un correo con los datos personales del dueño de la mascota y será usted el que decidirá cómo, cuando y si quiere ponerse en contacto con la misma.</p>
              <p>MyLostPet se pone a tu disposición para uso personal, no comercial. Las empresas, organizaciones u otras personas jurídicas no pueden utilizar el servicio para cualquier otro propósito. No puedes usar el sitio de MyLostPet para ningún propósito ilegal o no autorizado. Los usuarios internacionales se comprometen a cumplir con todas las reglas federales y/o locales sobre conducta y contenido aceptable. El usuario es el único responsable de su conducta y de cualquier dato, texto, información, fotos, links y demás contenidos ("Materiales") que envíe, publique y muestre en el sitio.</p>
            </div>

            <div className='w3-margin'>
              <h6><b>Derechos de autor</b></h6>
              <p>Nos reservamos el derecho de modificar, eliminar o borrar “Material” sin previo aviso, que según nuestro criterio, sea delictivo, fraudulento, amenazante, calumnioso, difamatorio, obsceno o de dudosa reputación, o que infrinja o viole la propiedad intelectual u otros derechos de propiedad de estos Términos y condiciones.</p>
              <p>El Usuario no deberá subir, publicar o de cualquier otra forma cualquier material protegido por derechos de autor, marcas registradas o cualquier otro derecho de propiedad sin el expreso consentimiento del propietario de los derechos, marca registrada o derecho de propiedad intelectual.</p>
              <p>Al enviar, publicar o mostrar cualquier material en y a través del sitio, automáticamente el usuario nos otorga y autoriza una licencia mundial (permiso) para utilizar de manera gratuita, libre de regalías, con derecho de exhibir públicamente o distribuir estos materiales en cualquier formato que el equipo de MyLostPet considere pertinente y a perpetuidad.</p>
              <p>Con excepción de lo expresamente autorizado por MyLostPet, no puedes copiar, modificar, publicar, transmitir, distribuir, ejecutar, exhibir o vender cualquier información y/o material (incluyendo en forma enunciativa pero no limitativa, imágenes, ilustraciones, textos y cualquier otro material visual en lo sucesivo y en conjunto o separadamente en MyLostPet. En este sitio podrás encontrar marcas registradas y derechos de autor de las que todos los derechos están reservados. Todos los materiales contenidos en este sitio, están protegidos por derechos de autor y/o como marca registrada, por lo que no podrán ser usados para propósitos distintos al de uso personal. La reproducción, copia, distribución, trabajos derivados, publicación y cualquier otra forma de copiado o de uso no autorizada del material aquí contenido está expresamente prohibida. Si deseas solicitar una licencia para usar algún material de este sitio, por favor escríbenos a myfoundpet@gmail.com </p>
            </div>

            <div className='w3-margin'>
              <h6><b>Política de privacidad</b></h6>
              <p>La recopilación y uso de información personal se rige por nuestro Aviso de Privacidad. Al usar la web the MyLostPet, entiendes y aceptas que MyLostPet puede acceder, conservar y revelar su información y el contenido que se suba a la web si así lo requiere la ley o si de buena fe considera que dicha reserva o revelación es razonablemente necesaria para cumplir con los requisitos legales, procesar o para proteger los derechos y la propiedad de MyLostPet, sus afiliados o el público.</p>
              <p>En MyLostPet declinamos toda responsabilidad u obligación alguna por la exactitud, contenido, integridad, legalidad, fiabilidad, operabilidad o disponibilidad de la información o materiales exhibidos en el sitio web. El equipo de MyLostPet se exime de toda responsabilidad y la responsabilidad por la conducta de cualquier usuario.</p>
              <p>BAJO NINGUNA CIRCUNSTANCIA MYLOSTPET SERA RESPONSABLE POR DAÑOS INDIRECTOS, INCIDENTAL, CONSECUENTE, ESPECIAL O EJEMPLAR QUE SURJA DE O EN CONEXION CON EL USO DEL SITIO WEB.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = TermsAndConditions
