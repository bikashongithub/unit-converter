# Development method using Vercel V0

## Initial Prompts

-   **Objective definition:**
    The first indication was to create a device converter -by using Next.JS and Tellwind CSS with a clean, responsive interface for real -time converts in three categories (length, weight, temperature).

-   **Guidelines provided:**
    Quickly specified requirements such as real -time conversion updates, inputs with error messages and a device that switches functionality through an arrow button. It also suggested a mistake user interface for choosing a category.

## Follow of observation and changes.

-   **Modularity reorganization:**
    A follow -up signal directed the reorganization of the app to divide it into separate, modular components.

    -   **Data and logical separation:**
        Conversion factors and arguments were excellent in files (eg `` conversion data.ts` and 'conversion-hutils'), with typescript types for better protection.
    -   **Component distribution:**
        The components were divided into focused devices such as the category selector, unit sales, conversionate and swapbatton coordinated by a main container component.

-   **Benefits of Modularization:**
    This approach emphasized individual responsibility, reusable, easy maintenance and better test capacity for each component.

## UI improvement

-   **Beauty Promotion:**
    A subsequent signal was used to convert the original app interface to a blind attractive landing page.

    -   The design included interactive gradients, animated particles and a UI-inspired background of aceternity with a microscopic grid pattern.
    -   A dark/light ornamental mode was included to allow smooth theme infections.

-   **Scaling & Centering:**
    The prompt also specified scaling the converter UI (approximately 2x) and centering it on the landing page for prominence, ensuring that the main functionality stands out.

## Custom ThemeProvider context

    A subsequent prompt was done to create a custom `ThemeProvider` context for managing `light` and `dark` theme.

## Overall Development Approach

-   **Iterative Prompting:**
    The process was driven by a series of clear, concise prompts that progressively refined the code structure and design.
-   **Separation of Concerns:**
    Each step emphasized a clear separation of responsibilities—from conversion logic to UI components—to foster a maintainable and scalable codebase.
-   **UI & UX Focus:**
    The final phase integrated modern design aesthetics with interactive and responsive elements, transforming the app into an engaging landing page.
