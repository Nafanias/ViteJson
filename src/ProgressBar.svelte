<script>
    import { onMount } from "svelte";
    import { ProgressBar } from "carbon-components-svelte";

    let progress = 0;

    const updateProgress = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progress = Math.min(100, (scrollTop / scrollHeight) * 100); // Рассчитываем процент прокрутки
    };

    onMount(() => {
        window.addEventListener("scroll", updateProgress);
        updateProgress(); // Инициализация при загрузке
        return () => window.removeEventListener("scroll", updateProgress);
    });

    // Определение класса цвета в зависимости от прогресса
    $: progressBarClass = progress === 100 ? 'progress-bar--finished' : (progress > 0 ? 'progress-bar--active' : '');
</script>



<ProgressBar
    value={progress}
    class={progressBarClass} 
/>