const translations = {
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_experience: "Experience",
        nav_packages: "Packages",
        nav_contact: "Contact",
        
        hero_subtitle: "Hi, my name is",
        hero_title: "Alexandre Geraldo.",
        hero_role: "AWS Cloud, Networking & Troubleshooting Specialist.",
        hero_desc1: "Helping businesses design, secure, and troubleshoot AWS environments — fast and reliably.",
        hero_desc2: "With over 20 years of experience in enterprise infrastructure and cloud platforms, I specialize in AWS networking, security, and complex troubleshooting scenarios.",
        hero_cta: "Get In Touch",
        
        services_title: "What I Help With",
        
        srv_net_title: "AWS Networking & Security",
        srv_net_1: "VPC architecture",
        srv_net_2: "AWS WAF, Shield, Firewall Manager, and Network Firewall",
        srv_net_3: "Route 53, load balancers, and traffic routing issues",
        srv_net_4: "Security reviews and best-practice assessments",
        
        srv_tshoot_title: "Cloud Troubleshooting",
        srv_tshoot_1: "Production outages and performance degradation",
        srv_tshoot_2: "Networking latency, routing, and connectivity problems",
        srv_tshoot_3: "Load balancer, DNS, and firewall misconfigurations",
        srv_tshoot_4: "Emergency and short-term support engagements",
        
        srv_ai_title: "AI & Data-Driven Solutions",
        srv_ai_1: "Python-based data analysis and automation",
        srv_ai_2: "Machine learning models for forecasting and anomaly detection",
        srv_ai_3: "AI-assisted monitoring and performance analysis",
        srv_ai_4: "Experience with Scikit-learn, Pandas",
        
        exp_title: "Selected Projects",
        
        exp_1_meta: "FinTech / AI / Cloud",
        exp_1_title: "AI-Based Duplicate Payment & Fraud Detection Platform",
        exp_1_p1: "<strong>Problem:</strong> Large ERP systems process high volumes of financial transactions, making them vulnerable to duplicate payments and fraud. Existing reactive controls led to false positives and delayed detection.",
        exp_1_s1: "<strong>Solution:</strong> Designed an AI-driven detection platform using Python and supervised machine learning models (Random Forest, SVC). Analyzed historical data to proactively identify high-risk transactions.",
        exp_1_i1: "<strong>Impact:</strong> Proactively identified performance degradation. Improved user experience. Achieved ~20% more accurate performance predictions.",
        
        exp_2_meta: "AIOps / Observability",
        exp_2_title: "AI-Driven Operations & Observability",
        exp_2_desc: "Applying AIOps principles to improve system reliability. Combining monitoring data, logs, and historical trends with ML models to move from reactive to predictive operations.",
        exp_2_l1: "Anomaly detection on performance, traffic, and financial metrics",
        exp_2_l2: "Noise reduction and alert correlation",
        exp_2_l3: "Root cause analysis support",
        
        pkg_title: "Freelance Service Packages",
        
        pkg_1_title: "AWS Incident Recovery & Troubleshooting",
        pkg_1_best: "Best for: Production outages, degraded performance, urgent issues",
        pkg_1_l1: "Rapid root cause analysis across AWS networking & security",
        pkg_1_l2: "VPC, load balancer, DNS, and firewall troubleshooting",
        pkg_1_l3: "Clear remediation steps and recommendations",
        pkg_1_eng: "Engagement: Hourly or short-term fixed scope",
        
        pkg_2_title: "AIOps Monitoring Pilot (30 Days)",
        pkg_2_best: "Best for: Teams overwhelmed by alerts or recurring incidents",
        pkg_2_l1: "Monitoring and alert review",
        pkg_2_l2: "Anomaly detection on key metrics",
        pkg_2_l3: "Performance and capacity forecasting",
        pkg_2_l4: "Actionable dashboards and alerts",
        pkg_2_out: "Outcome: Reduced alert noise & proactive visibility",
        
        about_title: "About & Skills",
        about_p1: "I am a senior cloud engineer with a strong background in infrastructure, DevOps, and data science. My career spans enterprise IT, startups, and cloud-native environments. I enjoy solving complex technical problems and helping teams stabilize and scale their systems.",
        about_p2: "Master's in Business Analytics from Trine University (exp 2026), Bachelor of Computer Science from Georgia State University.",
        skills_title: "Technical Skills",
        testimonials_title: "Client Feedback",
        testimonial_quote: "\"Alexandre has an exceptional ability to understand complex systems quickly and provide clear, effective solutions. His work helped us stabilize critical systems and prevent recurring issues.\"",
        
        contact_title: "Get In Touch",
        contact_desc: "I am available for short-term troubleshooting, project-based AWS architecture work, and ongoing cloud support.",
        contact_btn: "Say Hello",
        footer_copy: "&copy; 2025 Alexandre Geraldo. Built for performance."
    },
    pt: {
        nav_about: "Sobre",
        nav_services: "Serviços",
        nav_experience: "Experiência",
        nav_packages: "Pacotes",
        nav_contact: "Contato",
        
        hero_subtitle: "Olá, meu nome é",
        hero_title: "Alexandre Geraldo.",
        hero_role: "Especialista em Cloud AWS, Rede e Troubleshooting.",
        hero_desc1: "Ajudando empresas a projetar, proteger e solucionar problemas em ambientes AWS — de forma rápida e confiável.",
        hero_desc2: "Com mais de 20 anos de experiência em infraestrutura corporativa e plataformas de nuvem, sou especialista em redes AWS, segurança e cenários complexos de troubleshooting.",
        hero_cta: "Entre em Contato",
        
        services_title: "Como Posso Ajudar",
        
        srv_net_title: "Redes AWS & Segurança",
        srv_net_1: "Arquitetura VPC",
        srv_net_2: "AWS WAF, Shield, Firewall Manager e Network Firewall",
        srv_net_3: "Route 53, balanceadores de carga e problemas de roteamento",
        srv_net_4: "Revisões de segurança e avaliações de boas práticas",
        
        srv_tshoot_title: "Troubleshooting em Cloud",
        srv_tshoot_1: "Interrupções de produção e degradação de desempenho",
        srv_tshoot_2: "Latência de rede, roteamento e problemas de conectividade",
        srv_tshoot_3: "Configurações incorretas de Load balancer, DNS e firewall",
        srv_tshoot_4: "Suporte emergencial e engajamentos de curto prazo",
        
        srv_ai_title: "Soluções de IA & Dados",
        srv_ai_1: "Análise de dados e automação baseada em Python",
        srv_ai_2: "Modelos de Machine Learning para previsão e detecção de anomalias",
        srv_ai_3: "Monitoramento assistido por IA e análise de desempenho",
        srv_ai_4: "Experiência com Scikit-learn, Pandas",
        
        exp_title: "Projetos Selecionados",
        
        exp_1_meta: "FinTech / IA / Cloud",
        exp_1_title: "Plataforma de Detecção de Fraude e Pagamentos Duplicados baseada em IA",
        exp_1_p1: "<strong>Problema:</strong> Grandes sistemas ERP processam altos volumes de transações financeiras, tornando-os vulneráveis a pagamentos duplicados e fraudes. Controles reativos existentes levavam a falsos positivos e detecção tardia.",
        exp_1_s1: "<strong>Solução:</strong> Projetei uma plataforma de detecção impulsionada por IA usando Python e modelos de aprendizado supervisionado (Random Forest, SVC). Analisei dados históricos para identificar proativamente transações de alto risco.",
        exp_1_i1: "<strong>Impacto:</strong> Identifiquei proativamente a degradação do desempenho. Melhorei a experiência do usuário. Alcancei previsões de desempenho ~20% mais precisas.",
        
        exp_2_meta: "AIOps / Observabilidade",
        exp_2_title: "Operações Impulsionadas por IA & Observabilidade",
        exp_2_desc: "Aplicando princípios de AIOps para melhorar a confiabilidade do sistema. Combinando dados de monitoramento, logs e tendências históricas com modelos de ML para passar de operações reativas para preditivas.",
        exp_2_l1: "Detecção de anomalias em métricas de desempenho, tráfego e financeiras",
        exp_2_l2: "Redução de ruído e correlação de alertas",
        exp_2_l3: "Suporte à análise de causa raiz",
        
        pkg_title: "Pacotes de Serviços Freelance",
        
        pkg_1_title: "Recuperação de Incidentes AWS & Troubleshooting",
        pkg_1_best: "Melhor para: Interrupções de produção, desempenho degradado, problemas urgentes",
        pkg_1_l1: "Análise rápida de causa raiz em redes AWS e segurança",
        pkg_1_l2: "Troubleshooting de VPC, load balancer, DNS e firewall",
        pkg_1_l3: "Passos claros de remediação e recomendações",
        pkg_1_eng: "Engajamento: Por hora ou escopo fixo de curto prazo",
        
        pkg_2_title: "Piloto de Monitoramento AIOps (30 Dias)",
        pkg_2_best: "Melhor para: Equipes sobrecarregadas por alertas ou incidentes recorrentes",
        pkg_2_l1: "Revisão de monitoramento e alertas",
        pkg_2_l2: "Detecção de anomalias em métricas chave",
        pkg_2_l3: "Previsão de desempenho e capacidade",
        pkg_2_l4: "Dashboards acionáveis e alertas",
        pkg_2_out: "Resultado: Redução de ruído de alertas & visibilidade proativa",
        
        about_title: "Sobre & Habilidades",
        about_p1: "Sou um engenheiro de nuvem sênior com forte experiência em infraestrutura, DevOps e ciência de dados. Minha carreira abrange TI corporativa, startups e ambientes nativos da nuvem. Gosto de resolver problemas técnicos complexos e ajudar equipes a estabilizar e escalar seus sistemas.",
        about_p2: "Mestrado em Business Analytics pela Trine University (exp 2026), Bacharelado em Ciência da Computação pela Georgia State University.",
        skills_title: "Habilidades Técnicas",
        testimonials_title: "Feedback de Clientes",
        testimonial_quote: "\"Alexandre tem uma habilidade excepcional de entender sistemas complexos rapidamente e fornecer soluções claras e eficazes. Seu trabalho nos ajudou a estabilizar sistemas críticos e evitar problemas recorrentes.\"",
        
        contact_title: "Entre em Contato",
        contact_desc: "Estou disponível para troubleshooting de curto prazo, trabalho de arquitetura AWS baseado em projetos e suporte contínuo em nuvem.",
        contact_btn: "Diga Olá",
        footer_copy: "&copy; 2025 Alexandre Geraldo. Construído para desempenho."
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if content has HTML tags to decide between innerHTML and textContent
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active state on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
});
