# Finzai Web

Finzai es un agente de Inteligencia Financiera Personalizada. Esta es la landing page oficial para la captación de usuarios (Beta Waitlist) desarrollada con una estética "Cyber-Fintech" y Glassmorphism para ofrecer una experiencia *Premium*.

## 🚀 Características Principales

- **Diseño Premium**: Interfaz oscura con estética *glassmorphism*, sutiles gradientes de neón (cyan/blue) y bordes translúcidos (`index.css` & Tailwind).
- **Animaciones Fluidas**: Construido con **Framer Motion** para transiciones suaves, apariciones sincronizadas en scroll y microinteracciones de alta fidelidad.
- **Sistema Multilenguaje (i18n)**: Soporte nativo para Español e Inglés con detección automática según el navegador (`navigator.language`) y un selector manual integrado en el Navbar (gestionado por `LanguageContext.tsx`).
- **Totalmente Responsivo**: Construido con Tailwind CSS y un enfoque *Fluid Design* para garantizar una visualización impecable en móviles, tablets y escritorios.
- **Captura de Leads Integrada**: Funcionalidad completa en el Hero y el CTA final conectada a un webhook de **n8n** para la gestión de la lista de espera.
- **Arquitectura Limpia**: Separación estricta de responsabilidades (Providers, Hooks, Secciones y Componentes UI reutilizables).

## 🛠 Stack Tecnológico

- **Framework**: [React](https://reactjs.org/) (TypeScript)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes**: [shadcn/ui](https://ui.shadcn.com/) y Radix Primitives
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconografía**: [Lucide React](https://lucide.dev/)

## 📂 Estructura del Proyecto

```text
finzai-web/
├── src/
│   ├── assets/       # Media estática (logos, gráficos)
│   ├── components/   # Sistema de diseño
│   │   ├── layout/   # Navbar, Footer
│   │   ├── sections/ # Secciones de la página (Hero, Features, Philosophy, etc.)
│   │   └── ui/       # Componentes shadcn básicos (Buttons, Inputs, etc.)
│   ├── contexts/     # Estado global (LanguageContext)
│   ├── i18n/         # Diccionarios de traducción (translations.ts)
│   ├── providers/    # Wrappers de contexto globales (AppProviders.tsx)
│   ├── pages/        # Rutas principales (Index.tsx, NotFound.tsx)
│   ├── index.css     # Estilos globales y tokens CSS
│   └── App.tsx       # Root Component y Router
```

## 💻 Desarrollo Local

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo en local:
   ```bash
   npm run dev
   ```

3. Construye el proyecto para producción:
   ```bash
   npm run build
   ```

4. Ejecuta el linter (asegura estilos limpios):
   ```bash
   npm run lint
   ```

## 🔗 Integraciones Externas

**N8n Webhook**: La captura de leads envía un payload JSON a un endpoint de n8n para la gestión de la lista (`N8N_WEBHOOK_URL` está configurado en `Hero.tsx` y `CTA.tsx`).
