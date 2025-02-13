<script>
  import { CodeSnippet, OrderedList, ListItem, ImageLoader, OutboundLink, DataTable } from "carbon-components-svelte";  
</script>

<style>
  .bold {
    font-weight: bold;
  }
  
  /* Глобальные стили сетки и контейнера */
  :global(.bx--col-lg-11) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Стили для текстовых элементов */
  h1 {
    max-width: 100%;
    word-wrap: break-word;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 2rem 0 1.5rem;
  }

  p {
    max-width: 700px;
    margin: 1rem 0;
    line-height: 1.6;
  }

  /* Стили для код-блоков */
  :global(pre) {
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-width: 100%;
    margin: 1rem 0;
    background: var(--cds-layer-01);
    border-radius: 4px;
  }

  /* Мобильная адаптация */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      padding: 0 0.5rem;
    }
    
    :global(pre) {
      font-size: 0.875rem;
      padding: 0.75rem;
    }
  }

  /* Существующие стили навигации */
  :global(.mobile-nav) {
    display: none;
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

<h1 id="vsXML" >JSON vs XML</h1>

<p>В SOAP можно применять <u>только</u> XML, там без вариантов.</p>

<p>В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p>

<p>Сравните один и тот же запрос на обновление данных в карточке пользователя:</p>
<p><span class="bold">XML</span></p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false} >
	{`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`}
</CodeSnippet>



<p><span class="bold">JSON</span></p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false} >
	{`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`}
</CodeSnippet>

<p>За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>