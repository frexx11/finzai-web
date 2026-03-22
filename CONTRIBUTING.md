# Guía de Contribución para Finzai Web

¡Bienvenido al repositorio oficial de Finzai Web! Este documento establece las reglas básicas para contribuir y mantener nuestro estándar de calidad.

## Flujo de Trabajo (GitFlow Simplificado)

Hemos protegido nuestra rama principal (`main`) para evitar escrituras directas. Todo nuestro desarrollo se realizará siguiendo estas reglas:

1. **Trabaja siempre en ramas secundarias:** 
   Nuestra rama principal de desarrollo y pruebas junto a Antigravity es `Test-Antigravity`.
   Para características nuevas creadas por humanos, usa el formato `feature/nombre-de-la-funcionalidad`.

2. **Crea un Pull Request (PR):**
   Cuando tu código esté listo, probado localmente con `npm run dev` y estilizado (Linter), haz *Push* de tu rama y abre un PR en GitHub hacia `main`.

3. **Revisión y Merge:**
   La automatización de GitHub revisará que el código pueda compilarse. Un administrador revisará el PR visualmente y si todo está perfecto, autorizará la fusión (Merge).

4. **Despliegue Automático:**
   Al hacer merge en `main`, GitHub Actions tomará el control y actualizará la página web en producción.

## Buenas Prácticas de Código
* Todo el CSS deberá estar gobernado por Tailwind (fichero `index.css` de ser estrictamente necesario).
* Los componentes deben crearse en `/src/components` con una separación clara (layout, ui, sections).
* Los textos estáticos SIEMPRE deben pasar por nuestra herramienta de traducciones globales (`src/i18n/translations.ts`) usando el hook `useLanguage()`.
