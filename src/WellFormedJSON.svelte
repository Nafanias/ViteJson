<script>
  import { CodeSnippet, OrderedList, ListItem, ImageLoader, OutboundLink, DataTable } from "carbon-components-svelte";  
</script>

<style>  
  /* Глобальные стили сетки и контейнера */
  :global(.bx--col-lg-11) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Стили для текстовых элементов */
  h1, h2 {
    max-width: 100%;
    word-wrap: break-word;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 2rem 0 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin: 1.8rem 0 1.2rem;
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
    
    h2 {
      font-size: 1.75rem;
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

<h1>Well Formed JSON</h1>

<p>Разработчик сам решает, какой JSON будет считаться правильным, а какой нет. Но есть общие правила, которые нельзя нарушать. Наш JSON должен быть well formed, то есть синтаксически корректный.</p>

<p>Чтобы проверить JSON на синтаксис, можно использовать любой JSON Validator (так и гуглите). Я рекомендую сайт 
	<OutboundLink  visited href="https://www.w3schools.com/js/js_json_syntax.asp">
	import
	</OutboundLink >. Там есть сам валидатор + описание типичных ошибок с примерами.</p>

<p>Но учтите, что парсеры внутри кода работают не по википедии или w3schools, а по RFC, стандарту. Так что если хотите изучить «каким должен быть JSON», то правильнее открывать RFC и искать там
	<OutboundLink  visited href="https://datatracker.ietf.org/doc/html/rfc7159#page-4">
	JSON Grammar
	</OutboundLink >. Однако простому тестировщику хватит набора типовых правил с w3schools, их и разберем.</p>

<p>Правила well formed JSON:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>Данные написаны в виде пар «ключ:значение»</ListItem>
  <ListItem>Данные разделены запятыми</ListItem>
  <ListItem>Объект находится внутри фигурных скобок &lbrace;&rbrace;</ListItem>
  <ListItem>Массив — внутри квадратных []</ListItem>
</OrderedList>

<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/670/2bb/754/6702bb754535cfc309d67d148c12928c.png"
            style="width: 100%;"
        />
    </div>
</div>

<h2 id="data">1. Данные написаны в виде пар «ключ:значение»</h2>




<p>Например, так:</p>
<CodeSnippet code="&quot;name&quot;:&quot;Ольга&quot;" hideCopyButton showMoreLess={false}/>

<p>В JSON название ключа нужно брать в кавычки, в JavaScript не обязательно — он и так знает, что это строка. Если мы тестируем API, то там будет именно JSON, так что кавычки обычно нужны.</p>

<p>Но учтите, что это правило касается JSON-объекта. Потому что json может быть и числом, и строкой. То есть:</p>
<CodeSnippet code="123" hideCopyButton showMoreLess={false}/>

<p>Или</p>
<CodeSnippet code="&quot;Ольга&quot;" hideCopyButton showMoreLess={false}/>

<p>Это тоже корректный json, хоть и не в виде пар «ключ:значение».</p>

<p>И вот если у вас по ТЗ именно json-объект на входе, попробуйте его сломать, не передав ключ. Ещё можно не передать значение, но это не совсем негативный тест — система может воспринимать это нормально, как пустой ввод.</p>


<h2 id="Separation">2. Данные разделены запятыми</h2>


<p>Пары «ключ:значение» в объекте разделяются запятыми. После последней пары запятая не нужна!</p>

<p><b>Типичная ошибка:</b> поставили запятую в конце объекта:</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`{
  "query": "Виктор Иван",
  "count": 7,
}`}</CodeSnippet>


<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/getpro/habr/upload_files/79f/1e6/28e/79f1e628e9052de5ca240b6f23e8c1b1.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>Это последствия копипасты. Взяли пример из документации, подставили в постман (ну или разработчик API подставил в код, который будет вызывать систему), а потом решили поменять поля местами.</p>

<p>В итоге было так:</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`{
  "count": 7,
  "query": "Виктор Иван"
}`}
</CodeSnippet>

<p>Смотрим на запрос — ну, query то важнее чем count, надо поменять их местами! Копипастим всю строку «"count": 7,», вставляем ниже. Перед ней запятую добавляем, а «лишнюю» убрать забываем. По крайней мере у меня это частая ошибка, когда я «кручу-верчу, местами поменять хочу».</p>

<p>Другой пример — когда мы добавляем в запрос новое поле. Примерный сценарий:</p>
<OrderedList style="margin-left: 3.5em;">
	<ListItem>У меня уже есть работающий запрос в Postman-е. Но в нем минимум полей.</ListItem>
	<ListItem>Я его клонирую</ListItem>
	<ListItem>Копирую из документации нужное мне поле. Оно в примере не последнее, так что идёт с запятой на конце.</ListItem>
	<ListItem>Вставляю себе в конце запроса — в текущий конец добавляю запятую, потом вставляю новую строку.</ListItem>
	<ListItem>Отправляю запрос — ой, ошибка! Из копипасты то запятую не убрала!</ListItem>
</OrderedList>

<p>Я на этот сценарий постоянно напарываюсь при тестировании перестановки полей. А ведь это нужно проверять! Хороший запрос должен быть как в математической присказке: «от перемены мест слагаемых сумма не меняется».</p>


<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/getpro/habr/upload_files/5c8/324/d1d/5c8324d1d3a8e98eec2d14ea9b021acc.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>Не зря же определение json-объекта гласит, что «это <u>неупорядоченное</u> множество пар ключ:значение». Раз неупорядоченное — я могу передавать ключи в любом порядке. И сервер должен искать по запросу название ключа, а не обращаться к индексу элемента.</p>

<p>Разработчик, который будет взаимодействовать с API, тоже человек, который может ошибиться. И если система будет выдавать невразумительное сообщение об ошибке, можно долго думать, где конкретно ты налажал. Поэтому ошибки тоже тестируем.</p>

<p>Чтобы протестировать, как система обрабатывает «плохой json», замените запятую на точку с запятой:</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`{
  "count": 7;
  "query": "Виктор Иван"
}`}
</CodeSnippet>

<p>Или добавьте лишнюю запятую в конце запроса — эта ошибка будет встречаться чаще!</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`{
  "count": 7,
  "query": "Виктор Иван",
}`}
</CodeSnippet>

<p>Или пропустите запятую там, где она нужна:</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`{
  "count": 7
  "query": "Виктор Иван"
}`}
</CodeSnippet>

<p>Аналогично с массивом. Данные внутри разделяются через запятую. Хотите попробовать сломать? Замените запятую на точку с запятой! Тогда система будет считать, что у вас не 5 значений, а 1 большое:</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`
[1, 2, 3, 4, 5] <!-- корректный массив на 5 элементов* -->
[1; 2; 3; 4; 5] <!-- некорректный массив, так как такого разделителя быть не должно. Это может быть простой строкой, но тогда нужны кавычки -->!
`}
</CodeSnippet>

<p> *Я добавила комментарии внутри блока кода. Но учтите, что в JSON комментариев нет. Вообще. Так что если вы делаете запрос в Postman, не получится расставить комментарии у разных строчек в JSON-формате.</p>


<h2 id="object">3. Объект находится внутри фигурных скобок &lbrace;&rbrace;</h2>


<p>Это объект:</p>
<CodeSnippet code="&lbrace;a: 1, b: 2&rbrace;" hideCopyButton showMoreLess={false}/>

<p>Чтобы сломать это условие, уберите одну фигурную скобку:</p>
<CodeSnippet code="&lbrace;a: 1, b: 2" hideCopyButton showMoreLess={false}/>
<p> </p>
<CodeSnippet code="a: 1, b: 2;&rbrace;" hideCopyButton showMoreLess={false}/>

<p>Или попробуйте передать объект как массив:</p>
<CodeSnippet code="[ a: 1, b: 2 ]" hideCopyButton showMoreLess={false}/>

<p>Ведь если система ждет от вас в запросе объект, то она будет искать фигурные скобки.</p>


<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/8d6/af6/6cc/8d6af66cc1822c72b050735bf0ab9c40.png"
            style="width: 100%;"
        />
    </div>
</div>


<h2 id="array">4. Массив — внутри квадратных []</h2>


<p>Это массив:</p>
<CodeSnippet code="[1, 2]" hideCopyButton showMoreLess={false}/>

<p>Чтобы сломать это условие, уберите одну квадратную скобку:</p>
<CodeSnippet code="[1, 2" hideCopyButton showMoreLess={false}/>
<p> </p>
<CodeSnippet code="1, 2]" hideCopyButton showMoreLess={false}/>

<p>Или попробуйте передать массив как объект, в фигурных скобках:</p>
<CodeSnippet code="&lbrace; 1, 2 &rbrace;" hideCopyButton showMoreLess={false}/>

<p>Ведь если система ждет от вас в запросе массив, то она будет искать квадратные скобки.</p>


<h2 id="output" >Вывод</h2>


<p>JSON (JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript. Легко читается человеком и машиной. Часто используется в REST API (чаще, чем XML).</p>


<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/c39/e9f/345/c39e9f3453f63e43c3f1b8d0a276f5b6.png"
            style="width: 100%;"
        />
    </div>
</div>

<p>Корректные значения JSON:</p>
<OrderedList style="margin-left: 3.5em;">
	<ListItem>JSON-объект — неупорядоченное множество пар «ключ:значение», заключённое в фигурные скобки «&lbrace; &rbrace;».</ListItem>
	<ListItem>Массив — упорядоченный набор значений, разделенных запятыми. Находится внутри квадратных скобок [].</ListItem>
	<ListItem>Число (целое или вещественное).</ListItem>
	<ListItem>Литералы true (логическое значение «истина»), false (логическое значение «ложь») и null.</ListItem>
	<ListItem>Строка</ListItem>
</OrderedList>


<p>При тестировании REST API чаще всего мы будем работать именно с объектами, что в запросе, что в ответе. Массивы тоже будут, но обычно внутри объектов.</p>

<p>Комментариев в JSON, увы, нет.</p>

<p>Правила well formed JSON:</p>


<OrderedList style="margin-left: 3.5em;">
	<ListItem>Данные в объекте написаны в виде пар «ключ:значение»</ListItem>
	<ListItem>Данные в объекте или массиве разделены запятыми</ListItem>
	<ListItem>Объект находится внутри фигурных скобок &lbrace;&rbrace;</ListItem>
	<ListItem>Массив — внутри квадратных []</ListItem>
</OrderedList>