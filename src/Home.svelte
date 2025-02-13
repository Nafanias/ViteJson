<script>
	import { CodeSnippet, OrderedList, ListItem, ImageLoader, OutboundLink, DataTable } from "carbon-components-svelte";
	import { useLocation } from 'svelte-routing';
	import { getContext } from 'svelte';

const rows = [
  {
    id: "a",
    name: "{\n  \"Balancer\": \"3\"\n}", // Экранируем двойные кавычки
    right: JSON.stringify(
      {
        query: "Виктор Иван",
        count: 7,
      },
      null,
      2 // Уровень отступа
    ), // Преобразуем объект в строку с отступами
  },
];

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


<h1>Что такое JSON</h1>


<p>JSON (англ. JavaScript Object Notation) — это формат данных, который в основном используется для хранения и передачи данных, в частности между сервером и веб-приложением. Он широко применяется для представления структурированных данных. </p>


<h2 id="JSON">Как устроен JSON</h2>

<p>В качестве значений в JSON могут быть использованы: </p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>JSON-объект</ListItem>
  <ListItem>Массив</ListItem>
  <ListItem>Число (целое или вещественное)</ListItem>
  <ListItem>Литералы true (логическое значение «истина»), false (логическое значение «ложь») и null</ListItem>
  <ListItem>Строка</ListItem>
</OrderedList>


<p>Я думаю, с простыми значениями вопросов не возникнет, поэтому разберем массивы и объекты. </p>
<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://images-cdn.9gag.com/photo/aGdOG6w_700b.jpg"
            style="width: 100%;"
        />
    </div>
</div>


<h2 id="JSON-object">JSON-объект</h2>
 
<h3>Как устроен</h3>

<p>Возьмем пример из 
<OutboundLink  visited href="https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669115">
	документации подсказок Дадаты по ФИО:
</OutboundLink >.</p>


<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`{
  "query": "Виктор Иван",
  "count": 7
}`}
</CodeSnippet>

<p>И разберемся, что означает эта запись.</p>

<p>Объект заключен в фигурные скобки &lbrace;&rbrace; </p>

<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/getpro/habr/upload_files/acd/1a0/b3e/acd1a0b3e42086178942fcc0c0fd8d1b.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>JSON-объект — это неупорядоченное множество пар «ключ:значение».</p>

<p>Ключ — это название параметра, который мы передаем серверу. Он служит маркером для принимающей запрос системы: «смотри, здесь у меня значение такого-то параметра!». А иначе как система поймет, где что? Ей нужна подсказка!</p>

<p>Вот, например, «Виктор Иван» — это что? Ищем описание параметра «query» в документации — ага, да это же запрос для подсказок!</p>
<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/876/d5f/5df/876d5f5df458e26a565517291b9c08f5.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>Это как если бы мы вбили строку «Виктор Иван» в GUI (графическом интерфейсе пользователя):</p>


<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/bfe/c50/765/bfec507654e0e328a5260abae1a63928.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>Когда пользователь начинает вводить данные в формочку, то сразу видит результат — появляется список подсказок. Это значит, что разработчик прописал в коде условие — делать некое действие на каждый ввод символа в это поле. Какое действие? Можно увидеть через f12.</p>

<p>Открываем вкладку Network, вбиваем «Виктор Иван» и находим запрос, который при этом уходит на сервер. Ого, да это тот самый пример, что мы разбираем!</p>
<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/2db/ef1/434/2dbef14341056172d3815e69b7f0772b.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>Клиент передает серверу запрос в JSON-формате. Внутри два параметра, две пары «ключ-значение»:</p>


<OrderedList style="margin-left: 3.5em;">
  <ListItem>query — строка, по которой ищем (то, что пользователь вбил в GUI);</ListItem>
  <ListItem>count — количество подсказок в ответе (в Дадате этот параметр зашит в форму, всегда возвращается 7 подсказок. Но если дергать подсказки напрямую, значение можно менять!)</ListItem>
</OrderedList>


<p>Пары «ключ-значение» разделены запятыми:</p>

<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/404/210/27a/40421027ad8962083a263742db86b2e2.png"
            style="width: 100%;"
        />
    </div>
</div>

<p>Строки берем в кавычки, числа нет:</p>

<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/fe9/c45/523/fe9c45523dd56e5f240b7f1bdf267ecf.png"
            style="width: 100%;"
        />
    </div>
</div>

<p>Конечно, внутри может быть не только строка или число. Это может быть и другой объект! Или массив... Или объект в массиве, массив в объекте... Любое количество уровней вложенности =))</p>

<p>Объект, массив, число, булево значение (true / false) — если у нас НЕ строка, кавычки не нужны. Но в любом случае это будет значение какого-то ключа:</p>





ТАБЛИЦА






<p>Переносы строк делать необязательно. Вообще пробелы и переносы строк нужны только человеку для читабельности, система поймет и без них:</p>


ТАБЛИЦА


<p>Ключ — ВСЕГДА строка, но мы все равно берем его в кавычки. В JavaScript этого можно не делать, в JSON нельзя.</p>


ТАБЛИЦА

<p>По крайней мере, если вы работаете с простыми значениями ключей, а несколько слов записываете в верблюжьемРегистре или в змеином_регистре. Если вы хотите написать в ключе несколько слов через пробел, ключ нужно взять в кавычки.</p>

ТАБЛИЦА

<p>И все же я рекомендую использовать простые названия ключей, или использовать snake_case.</p>

<p>Писать ключи можно в любом порядке. Ведь JSON-объект — это <u>неупорядоченное</u> множество пар «ключ:значение».</p>


















<DataTable
  zebra
  headers={[
    { key: "name", value: "Так правильно" },
    { key: "right", value: "Так тоже правильно" },
  ]}
  rows={rows}

/>


















<p>Очень важно это понимать, и тестировать! Принимающая запрос система должна ориентировать на название ключей в запросе, а не на порядок их следования. Ключевое слово «должна» )) Хотя знаю примеры, когда от перестановки ключей местами всё ломалось, ведь «первым должен идти запрос, а не count!».</p>



<h3>Ключ или свойство?</h3>

<p>Вот у нас есть JSON-объект:</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
	{`{
  "query": "Виктор Иван",
  "count": 7
}`}
</CodeSnippet>

<p>Что такое «query»? Если я хочу к нему обратиться, как мне это сказать? Есть 2 варианта, и оба правильные:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>Обратиться к свойству объекта;</ListItem>
  <ListItem>Получить значение по ключу.</ListItem>
</OrderedList>


<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/571/394/c65/571394c65e5f9992310a329cad1df6c3.png"
            style="width: 100%;"
        />
    </div>
</div>

<p>То есть «query» можно назвать как ключом, так и свойством. А как правильно то?</p>

<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/a17/d1f/8d3/a17d1f8d358046158dc484d8490eb993.png"
            style="width: 100%;"
        />
    </div>
</div>

<p>Правильно и так, и так! Просто есть разные определения объекта:</p>



<h3>Объект</h3>

<p>В JS объект — это именно объект. У которого есть набор свойств и методов:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>Свойства — описывают, ЧТО мы создаем.</ListItem>
  <ListItem>Методы — что объект умеет ДЕЛАТЬ.</ListItem>
</OrderedList>

<p>То есть если мы хотим создать машину, есть два пути:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>Перечислить 10 разных переменных — модель, номер, цвет, пробег...</ListItem>
  <ListItem>Создать один объект, где будут все эти свойства.</ListItem>
</OrderedList>

<p>Аналогично с кошечкой, собачкой, другом из записной книжки...</p>
<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/74e/19e/aea/74e19eaea84e2ed0ca70a8dccd97c42b.png"
            style="width: 100%;"
        />
    </div>
</div>

<p>Объектно-ориентированное программирование (ООП) предлагает мыслить не набором переменных, а объектом. Хотя бы потому, что это логичнее. Переменных в коде будет много, как понять, какие из них взаимосвязаны?</p>

<p>Вот если я создаю машину, сколько переменных мне надо заполнить? А если меняю данные? А если удаляю? Когда переменные разбросаны по коду, можно забыть про какую-то и получить ошибку в интерфейсе. А если у нас есть цельный объект, всегда можно посмотреть, какие у него есть свойства и методы.</p>

<p>Например, создадим кошечку:</p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
{`var cat = {
name: “Pussy”,
year: 1,
sleep: function() {
// sleeping code
}
}`}
</CodeSnippet>

<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/e54/411/117/e54411117536be81e8adbdc73a022897.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>В объекте cat есть:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>Свойства — name, year (что это за кошечка)</ListItem>
  <ListItem>Функции — sleep (что она умеет делать, описание поведения)</ListItem>
</OrderedList>

<p>По коду сразу видно, что у кошечки есть имя и возраст, она умеет спать. Если разработчик решит добавить новые свойства или методы, он дополнит этот объект, и снова всё в одном месте.</p>

<p>Если потом нужно будет получить информацию по кошечке, разработчик сделает REST-метод getByID, searchKitty, или какой-то другой. А в нем будет возвращать свойства объекта.</p>

<p>То есть метод вернет </p>
<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
	{`{
name: “Pussy”,
year: 1,
}
`}
</CodeSnippet>

<p>И при использовании имени вполне уместно говорить «обратиться к свойству объекта». Это ведь объект (кошечка), и его свойства!</p>


<h3>Объект</h3>
<p>Второе определение объекта — неупорядоченное множество пар ключ:значение, заключенное в фигурные скобки &lbrace;&rbrace;.</p>

<p>Оно применимо тогда, когда внутри фигурных скобок приходит не конкретный целостный объект, а просто набор полей. Они могут быть связаны между собой, а могут относится к совершенно разным объектам внутри кода:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>client_fio (в коде это свойство fio объекта client)</ListItem>
  <ListItem>kitty_name (в коде это свойство name объекта cat)</ListItem>
  <ListItem>car_model (в коде это свойство model объекта car)</ListItem>
  <ListItem>…</ListItem>
</OrderedList>

<p>В таком случае логично называть эти параметры именно ключами — мы хотим получить значение по ключу.</p>

<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/a27/55f/745/a2755f74538cb927c9117a876c44232d.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>Но в любом случае, и «ключ», и «свойство» будет правильно. Не пугайтесь, если в одной книге / статье / видео увидели одно, в другой другое... Это просто разные трактовки.</p>


<h3>Итого</h3>

<p>Json-объект — это неупорядоченное множество пар «ключ:значение», заключённое в фигурные скобки «&lbrace;  &rbrace;». Ключ описывается строкой, между ним и значением стоит символ «:». Пары ключ-значение отделяются друг от друга запятыми.</p>

<p>Значения ключа могут быть любыми:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>Число</ListItem>
  <ListItem>строка</ListItem>
  <ListItem>массив</ListItem>
  <ListItem>другой объект</ListItem>
  <ListItem>…</ListItem>
</OrderedList>



<p>И только строку мы берем в кавычки!</p>

<h2 id="JSON-array">JSON-массив</h2>

<p><span class="bold">Как устроен</span></p>
	
<p>Давайте снова начнем с примера. Это массив:</p>
<CodeSnippet code="[ &quot;MALE&quot;, &quot;FEMALE&quot; ]" hideCopyButton showMoreLess={false}/>

<p>Массив заключен в квадратные скобки []</p>
<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/5b1/c5f/800/5b1c5f800d9c612a1b27e87be3cc0297.png"
            style="width: 100%;"
        />
    </div>
</div>


<p>Внутри квадратных скобок идет набор значений. Тут нет ключей, как в объекте, поэтому обращаться к массиву можно только по номеру элемента. И поэтому в случае массива менять местами данные внутри <u>нельзя</u>. Это упорядоченное множество значений.</p>
<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/f7b/4b1/af8/f7b4b1af8f617aa9ca89fe15124863ed.png"
            style="width: 100%;"
        />
    </div>
</div>

<p>Значения разделены запятыми:</p>
<div style="text-align: center;">
    <div style="width: 60%; display: inline-block;">
        <ImageLoader 
            src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/760/c8f/f7a/760c8ff7ab4e88155efae8faeb46b689.png"
            style="width: 100%;"
        />
    </div>
</div>

<p><span class="bold">Значения внутри</span></p>

<p>Внутри массива может быть все, что угодно:</p>


<p><span class="bold">Цифры</span></p>

<CodeSnippet code="[ 1, 5, 10, 33 ]" hideCopyButton showMoreLess={false}/>

<p><span class="bold">Строки</span></p>

<CodeSnippet code="[ &quot;MALE&quot;, &quot;FEMALE&quot; ]" hideCopyButton showMoreLess={false}/>

<p><span class="bold">Смесь</span></p>

<CodeSnippet code="[ 1, &quot;Андрюшка&quot;,  10, 33 ]" hideCopyButton showMoreLess={false}/>

<p><span class="bold">Объекты</span></p>

<p>Да, а почему бы и нет:</p>
<CodeSnippet code="[1, &lbrace;a:1, b:2&rbrace;, &quot;такой вот массивчик&quot;]" hideCopyButton showMoreLess={false}/>

<p>Или даже что-то более сложное. Вот пример ответа подсказок из Дадаты:</p>
<CodeSnippet type="multi" hideCopyButton >
	{`[
        {
            "value": "Иванов Виктор",
            "unrestricted_value": "Иванов Виктор",
            "data": {
                "surname": "Иванов",
                "name": "Виктор",
                "patronymic": null,
                "gender": "MALE"
            }
        },
        {
            "value": "Иванченко Виктор",
            "unrestricted_value": "Иванченко Виктор",
            "data": {
                "surname": "Иванченко",
                "name": "Виктор",
                "patronymic": null,
                "gender": "MALE"
            }
        },
        {
            "value": "Виктор Иванович",
            "unrestricted_value": "Виктор Иванович",
            "data": {
                "surname": null,
                "name": "Виктор",
                "patronymic": "Иванович",
                "gender": "MALE"
            }
        }
]`}
</CodeSnippet>

<p>Система возвращает массив подсказок. Сколько запросили в параметре count, столько и получили. Каждая подсказка — объект, внутри которого еще один объект. И это далеко не самая сложная структура! Уровней вложенности может быть сколько угодно — массив в массиве, который внутри объекта, который внутри массива, который внутри объекта...</p>

<p>Ну и, конечно, можно и наоборот, передать массив в объекте. Вот пример запроса в подсказки:</p>

<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
	{`{
"query": "Виктор Иван",
"count": 7,
"parts": ["NAME", "SURNAME"]
}`}
</CodeSnippet>

<h3>Итого</h3>

<p>Массив — это просто набор значений, разделенных запятыми. Находится внутри квадратных скобок [].</p>

<p>А вот внутри него может быть все, что угодно:</p>
<OrderedList style="margin-left: 3.5em;">
  <ListItem>числа</ListItem>
  <ListItem>строки</ListItem>
  <ListItem>другие массивы</ListItem>
  <ListItem>объекты</ListItem>
  <ListItem>смесь из всего вышеназванного</ListItem>
</OrderedList>


