<script>
  import { Grid, Row, Column, Link, OrderedList, ListItem } from "carbon-components-svelte";
  
  // Заголовки для навигации
  const sections = [
    { id: 'кодирование', title: 'Кодирование' },
    { id: 'декодирование', title: 'Декодирование' },
    { id: 'ошибки', title: 'Ошибки' },
    { id: 'http-запросы', title: 'HTTP-запросы' }
  ];
</script>

<Grid>
  <!-- Мобильная навигация (видна только на маленьких экранах) -->
  <Row class="mobile-nav">
    <Column sm={4} md={8} lg={0}>
      <OrderedList>
        {#each sections as section}
          <ListItem>
            <Link href="#{section.id}">{section.title}</Link>
          </ListItem>
        {/each}
      </OrderedList>
    </Column>
  </Row>

  <Row>
	<Column lg={3}/>
    <!-- Основной контент -->
    <Column sm={4} md={8} lg={11}>
      <h1>Работа с JSON в PHP</h1>
      
      <h2 id="кодирование">1. Кодирование</h2>
      <h2 id="декодирование">2. Декодирование</h2>
      <h2 id="ошибки">3. Получение ошибок и их исправление</h2>
      <h2 id="http-запросы">4. HTTP-запросы в формате JSON</h2>
    </Column>
	
	<!-- Десктопная навигация (видна только на больших экранах) -->
    <Column lg={2} class="desktop-nav">
		<div class="sticky-container">
        <OrderedList>
          {#each sections as section}
            <ListItem>
              <Link href="#{section.id}">{section.title}</Link>
            </ListItem>
          {/each}
        </OrderedList>
      </div>
    </Column>
  </Row>
</Grid>

<style>
  :global(.mobile-nav) {
    display: none;
  }

  :global(.desktop-nav) .sticky-container {
    position: sticky;
    top: 2rem;
    padding-left: 1rem;
    border-left: 1px solid var(--cds-border-subtle-01);
  }

  @media (max-width: 1056px) {
    :global(.desktop-nav) {
      display: none !important;
    }

    :global(.mobile-nav) {
      display: block;
      margin-bottom: 2rem;
    }
  }
</style>