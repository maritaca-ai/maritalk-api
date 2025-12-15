# Introduction to Sabiá

The Portuguese language specialized models by Maritaca AI, known as Sabiá, are available through an API.

The charge for the use of the models is based on the volume of tokens, considering both input and output data. The specialized training of the Sabiá models ensures superior performance at a more accessible cost compared to other market solutions.

---
<div className="intro-features">
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-chat" aria-hidden="true"></span>
    <h3>Answer questions</h3>
    <p>It can answer a wide variety of questions on many different topics. The information provided is based on the training data, which includes a vast range of books, websites, and other materials.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-context" aria-hidden="true"></span>
    <h3>Provide Information</h3>
    <p>It can follow the context of a conversation and adjust responses accordingly, providing up-to-date information up to its cutoff date, such as details about historical events, science, technology, culture, and more.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-translate" aria-hidden="true"></span>
    <h3>Translation</h3>
    <p>It has the ability to translate texts to and from many different languages.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-education" aria-hidden="true"></span>
    <h3>Teaching and Tutoring</h3>
    <p>It can help explain complex concepts and assist in learning various subjects, providing detailed explanations about a variety of topics.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-creative" aria-hidden="true"></span>
    <h3>Creative text generation</h3>
    <p>It can create texts, stories, poems, dialogues, and other creative content in Portuguese.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-support" aria-hidden="true"></span>
    <h3>Customer support</h3>
    <p>It is capable of helping with frequently asked questions and offering basic customer assistance.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-data" aria-hidden="true"></span>
    <h3>Data analysis</h3>
    <p>It can help interpret and analyze provided data that do not require updates after the cutoff date.</p>
  </div>
</div>

It is important to remember that, although the models are a powerful tool for language tasks, they do not have consciousness or real understanding and their responses are based on language patterns learned during training.

---
## Performance

Thanks to our specialized training, our models offer superior quality at a lower cost compared to the competition. Check below the comparison of the quality of Sabiá-3 (our most advanced model), measured by performance in 93 Brazilian Exams (such as ENEM, Enade, Revalida, OAB, ENAM, CPNU, UNICAMP, USP, among others), in relation to the price:

<div id="graph-container">
  <iframe 
    src="/img/price_vs_performance_en.html" 
    style={{
      width: '2384px',  /* Dimensões originais multiplicadas por 2 */
      height: '1164px', /* Dimensões originais multiplicadas por 2 */
      border: 'none',
      transformOrigin: '0 0',
      position: 'absolute',
      backgroundColor: 'var(--ifm-background-color)'
    }} 
    frameBorder="0"
    scrolling="no"
  />
</div>

<style>
  {`
    #graph-container {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
    }
    @media (min-width: 1024px) {
      #graph-container {
        height: 465.6px; /* 1164px * 0.4 */
      }
      #graph-container iframe {
        transform: scale(0.4);
      }
    }
    @media (min-width: 768px) and (max-width: 1023px) {  /* Landscape - @media (orientation: landscape) {*/
      #graph-container {
        height: 349.2px; /* 1164px * 0.3 */
      }
      #graph-container iframe {
        transform: scale(0.3);
      }
    }
    @media (max-width: 767px) { /* Portrait - @media (orientation: portrait) {*/
      #graph-container {
        height: 186.24px; /* 1164px * 0.16 */
      }
      #graph-container iframe {
        transform: scale(0.16);
      }
    }
  `}
</style>
