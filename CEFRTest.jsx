import React, { useState } from 'react';
import { BookOpen, CheckCircle, ArrowRight, Mail, TrendingUp, Award } from 'lucide-react';

const CEFRTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      type: 'grammar',
      level: 'A1',
      question: '_____ name is Maria.',
      options: ['My', 'I', 'Me', 'Mine'],
      correct: 0
    },
    {
      id: 2,
      type: 'vocabulary',
      level: 'A1',
      question: 'I _____ coffee every morning.',
      options: ['drink', 'drinks', 'drinking', 'drank'],
      correct: 0
    },
    {
      id: 3,
      type: 'reading',
      level: 'A2',
      text: 'John goes to school by bus. He leaves home at 7:30 AM.',
      question: 'How does John go to school?',
      options: ['By car', 'By bus', 'By bike', 'On foot'],
      correct: 1
    },
    {
      id: 4,
      type: 'grammar',
      level: 'A2',
      question: 'She _____ to the gym yesterday.',
      options: ['go', 'goes', 'went', 'going'],
      correct: 2
    },
    {
      id: 5,
      type: 'vocabulary',
      level: 'A2',
      question: 'The weather is _____ today. I need an umbrella.',
      options: ['sunny', 'rainy', 'hot', 'cold'],
      correct: 1
    },
    {
      id: 6,
      type: 'grammar',
      level: 'B1',
      question: 'If I _____ more time, I would learn another language.',
      options: ['have', 'had', 'will have', 'would have'],
      correct: 1
    },
    {
      id: 7,
      type: 'reading',
      level: 'B1',
      text: 'Remote work has become increasingly popular. Many companies now allow employees to work from home, which offers flexibility but also requires self-discipline.',
      question: 'According to the text, remote work requires:',
      options: ['A big office', 'Self-discipline', 'More money', 'Less time'],
      correct: 1
    },
    {
      id: 8,
      type: 'vocabulary',
      level: 'B1',
      question: 'The project was _____ due to lack of funding.',
      options: ['postponed', 'prevented', 'promoted', 'processed'],
      correct: 0
    },
    {
      id: 9,
      type: 'grammar',
      level: 'B1',
      question: 'She _____ in Paris for five years before moving to London.',
      options: ['lived', 'has lived', 'had lived', 'was living'],
      correct: 2
    },
    {
      id: 10,
      type: 'grammar',
      level: 'B2',
      question: 'By this time next year, I _____ my degree.',
      options: ['complete', 'will complete', 'will have completed', 'am completing'],
      correct: 2
    },
    {
      id: 11,
      type: 'reading',
      level: 'B2',
      text: 'Despite considerable advances in technology, the fundamental challenge of climate change remains largely unaddressed. Scientists emphasize that immediate action is crucial to mitigate long-term consequences.',
      question: 'The text suggests that climate change:',
      options: ['Has been solved', 'Requires immediate action', 'Is not important', 'Only affects scientists'],
      correct: 1
    },
    {
      id: 12,
      type: 'vocabulary',
      level: 'B2',
      question: 'Her argument was so _____ that everyone was convinced.',
      options: ['compelling', 'compiled', 'complying', 'ComplEting'],
      correct: 0
    },
    {
      id: 13,
      type: 'grammar',
      level: 'B2',
      question: '_____ the difficulties, they managed to finish on time.',
      options: ['Although', 'Despite', 'However', 'Because'],
      correct: 1
    },
    {
      id: 14,
      type: 'grammar',
      level: 'C1',
      question: 'Scarcely _____ the door when the phone rang.',
      options: ['had I opened', 'I had opened', 'I opened', 'did I open'],
      correct: 0
    },
    {
      id: 15,
      type: 'reading',
      level: 'C1',
      text: 'The proliferation of artificial intelligence has sparked heated debate among ethicists and technologists alike. While proponents tout its transformative potential, critics warn of unforeseen ramifications that could fundamentally alter societal structures.',
      question: 'The text indicates that AI:',
      options: ['Is universally accepted', 'Has sparked debate', 'Has no critics', 'Is completely understood'],
      correct: 1
    },
    {
      id: 16,
      type: 'vocabulary',
      level: 'C1',
      question: 'The report provided a _____ analysis of the economic trends.',
      options: ['comprehensive', 'comprehensible', 'compressed', 'comprised'],
      correct: 0
    },
    {
      id: 17,
      type: 'grammar',
      level: 'C1',
      question: 'It is imperative that every student _____ the guidelines.',
      options: ['follows', 'follow', 'will follow', 'followed'],
      correct: 1
    },
    {
      id: 18,
      type: 'grammar',
      level: 'C2',
      question: 'Were it not for his intervention, the project _____ failed.',
      options: ['would have', 'will have', 'had', 'has'],
      correct: 0
    }
  ];

  const calculateResults = () => {
    let score = 0;
    let levelScores = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
    let grammarCorrect = 0;
    let vocabularyCorrect = 0;
    let readingCorrect = 0;
    let grammarTotal = 0;
    let vocabularyTotal = 0;
    let readingTotal = 0;

    questions.forEach((q, idx) => {
      if (q.type === 'grammar') grammarTotal++;
      if (q.type === 'vocabulary') vocabularyTotal++;
      if (q.type === 'reading') readingTotal++;

      if (answers[idx] === q.correct) {
        score++;
        levelScores[q.level]++;
        
        if (q.type === 'grammar') grammarCorrect++;
        if (q.type === 'vocabulary') vocabularyCorrect++;
        if (q.type === 'reading') readingCorrect++;
      }
    });

    let cefrLevel = 'A1';
    if (score >= 16) cefrLevel = 'C2';
    else if (score >= 14) cefrLevel = 'C1';
    else if (score >= 11) cefrLevel = 'B2';
    else if (score >= 8) cefrLevel = 'B1';
    else if (score >= 5) cefrLevel = 'A2';

    return {
      score,
      total: questions.length,
      cefrLevel,
      levelScores,
      strengths: {
        grammar: { correct: grammarCorrect, total: grammarTotal, percentage: Math.round((grammarCorrect / grammarTotal) * 100) },
        vocabulary: { correct: vocabularyCorrect, total: vocabularyTotal, percentage: Math.round((vocabularyCorrect / vocabularyTotal) * 100) },
        reading: { correct: readingCorrect, total: readingTotal, percentage: Math.round((readingCorrect / readingTotal) * 100) }
      }
    };
  };

  const handleAnswer = (answerIndex) => {
    setAnswers({ ...answers, [currentQuestion]: answerIndex });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
    }
  };

  const getLevelDescription = (level) => {
    const descriptions = {
      A1: 'Principiante — Puedes comprender y usar expresiones cotidianas básicas.',
      A2: 'Elemental — Puedes comunicarte en tareas simples y rutinarias.',
      B1: 'Intermedio — Puedes comprender textos principales y comunicarte en situaciones cotidianas.',
      B2: 'Intermedio Alto — Puedes interactuar con fluidez y comprender textos complejos.',
      C1: 'Avanzado — Puedes expresarte con fluidez y espontaneidad en contextos profesionales.',
      C2: 'Maestría — Dominio completo del idioma en todas las situaciones.'
    };
    return descriptions[level];
  };

  const getRecommendations = (level, strengths) => {
    const sortedSkills = Object.entries(strengths)
      .sort((a, b) => a[1].percentage - b[1].percentage);
    
    const weakest = sortedSkills[0][0];
    const strongest = sortedSkills[sortedSkills.length - 1][0];

    const skillNames = {
      grammar: 'gramática',
      vocabulary: 'vocabulario',
      reading: 'comprensión lectora'
    };

    return {
      weakest: skillNames[weakest],
      strongest: skillNames[strongest],
      course: level === 'A1' || level === 'A2' 
        ? 'Curso Básico de Fundamentos' 
        : level === 'B1' || level === 'B2'
        ? 'Curso Intermedio de Conversación'
        : 'Curso Avanzado de Perfeccionamiento'
    };
  };

  if (showResults) {
    const results = calculateResults();
    const recommendations = getRecommendations(results.cefrLevel, results.strengths);
    const sortedStrengths = Object.entries(results.strengths)
      .sort((a, b) => b[1].percentage - a[1].percentage);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">¡Test Completado!</h1>
              <p className="text-slate-600">Aquí están tus resultados detallados</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 text-white mb-8">
              <div className="text-center">
                <p className="text-blue-200 text-sm font-medium mb-2">TU NIVEL CEFR ES</p>
                <h2 className="text-6xl font-bold mb-4">{results.cefrLevel}</h2>
                <p className="text-xl text-blue-100">{getLevelDescription(results.cefrLevel)}</p>
                <div className="mt-6 pt-6 border-t border-blue-700">
                  <p className="text-blue-200 text-sm">Respuestas correctas</p>
                  <p className="text-3xl font-bold">{results.score} / {results.total}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-bold text-slate-800">Fortalezas</h3>
                </div>
                <div className="space-y-3">
                  {sortedStrengths.map(([skill, data]) => (
                    <div key={skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 capitalize">{skill === 'grammar' ? 'Gramática' : skill === 'vocabulary' ? 'Vocabulario' : 'Comprensión lectora'}</span>
                        <span className="text-green-600 font-bold">{data.percentage}%</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${data.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-amber-600 mr-2" />
                  <h3 className="text-lg font-bold text-slate-800">Áreas de Mejora</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Tu punto más fuerte es <span className="font-bold text-green-700">{recommendations.strongest}</span>.
                </p>
                <p className="text-slate-700">
                  Recomendamos enfocarte en <span className="font-bold text-amber-700">{recommendations.weakest}</span> para alcanzar el siguiente nivel.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white mb-8">
              <h3 className="text-xl font-bold mb-3">📚 Recomendación Personalizada</h3>
              <p className="text-red-50 mb-4">
                Basado en tu nivel <span className="font-bold">{results.cefrLevel}</span>, te recomendamos unirte a nuestro <span className="font-bold">{recommendations.course}</span> o nuestro plan de microlearning en Telegram.
              </p>
              <p className="text-red-50 text-sm">
                ¡Con práctica constante y el apoyo adecuado, alcanzarás el siguiente nivel!
              </p>
            </div>

            {!emailSubmitted ? (
              <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                <div className="flex items-start mb-4">
                  <Mail className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      ¿Quieres un informe completo?
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Déjanos tu correo y te enviaremos un análisis detallado con un plan de estudio personalizado. 100% gratis.
                    </p>
                  </div>
                </div>
                <form onSubmit={handleEmailSubmit} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-900"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center"
                  >
                    Enviar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-center text-green-800">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">¡Gracias!</h3>
                    <p className="text-sm">Te enviaremos tu informe completo a {email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center text-slate-600 text-sm">
            <p>© 2024 Babel English School - Transformando vidas a través del inglés</p>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-3xl mx-auto py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 mr-3" />
                <div>
                  <h1 className="text-2xl font-bold">Babel English School</h1>
                  <p className="text-blue-200 text-sm">Test de Nivel CEFR</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-blue-200 text-sm">Pregunta</p>
                <p className="text-2xl font-bold">{currentQuestion + 1}/{questions.length}</p>
              </div>
            </div>
            <div className="w-full bg-blue-700 rounded-full h-3">
              <div 
                className="bg-red-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="p-8">
            {question.text && (
              <div className="bg-slate-50 rounded-lg p-6 mb-6 border-l-4 border-blue-900">
                <p className="text-slate-700 italic leading-relaxed">{question.text}</p>
              </div>
            )}

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-4">
                {question.type === 'grammar' ? '📝 Gramática' : question.type === 'vocabulary' ? '📚 Vocabulario' : '📖 Comprensión Lectora'}
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">{question.question}</h2>
            </div>

            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-200 font-medium
                    ${answers[currentQuestion] === idx 
                      ? 'border-blue-900 bg-blue-50 text-blue-900 shadow-md' 
                      : 'border-slate-200 hover:border-blue-900 hover:bg-blue-50 text-slate-700'
                    }`}
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 mr-3 font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-slate-600 text-sm">
          <p>Tómate tu tiempo y elige la mejor respuesta</p>
        </div>
      </div>
    </div>
  );
};

export default CEFRTest;