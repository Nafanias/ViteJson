<script>
    import { onMount } from "svelte";
	import { CodeSnippet, OutboundLink } from "carbon-components-svelte";
	import { Link } from 'svelte-routing';
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

<!--<pre>{JSON.stringify(location, null, 2)}</pre>-->


<h1>Json в Python</h1>
    
    <p>Примечание: в Python данные JSON обычно представлены в виде строки.</p>
	
	<h2>Импортирование модуля </h2>
	<p>Чтобы использовать любой модуль в Python, всегда необходимо импортировать этот модуль. Мы можем импортировать модуль json, используя оператор 
	<OutboundLink  visited href="https://www.geeksforgeeks.org/import-module-python/">
	import
	</OutboundLink >.</p>

	<p>Пример: Импортирование модуля JSON.</p>
	<CodeSnippet type="multi">
		{`# importing json module
	import json`}
	</CodeSnippet>
	
	
	<h2>Парсинг JSON – Конвертация из JSON в Python</h2>
	<p>Функции  
	<OutboundLink  visited href="https://www.geeksforgeeks.org/json-load-in-python/">
	load()
	</OutboundLink >
	и 
	<OutboundLink  visited href="https://www.geeksforgeeks.org/json-loads-in-python/">
		loads()
	</OutboundLink > модуля json упрощают парсинг JSON-объектов.</p>
	
	<h2>Парсинг JSON-строки</h2>
	<p>Метод 
	<OutboundLink  visited href="https://www.geeksforgeeks.org/json-loads-in-python/">
		loads()
	</OutboundLink > используется для парсинга JSON-строк в Python, и результатом будет словарь Python.</p>

	<p>Синтаксис:</p>
	<CodeSnippet type="inline" code="json.loads(json_string)" />
	
	<p>Пример:Преобразование JSON в словарь</p>
	<CodeSnippet type="multi">
	{`# Python program to convert JSON to Dict 
import json
 
# JSON string
employee ='{"name": "Nitin", "department":"Finance",\
"company":"GFG"}'
 
# Convert string to Python dict
employee_dict = json.loads(employee)
print("Data after conversion")
print(employee_dict)
print(employee_dict['department'])
 
print("\nType of data")
print(type(employee_dict))`}
	</CodeSnippet>

	








<h2 id="Formatting">Форматирование JSON</h2>

<p>В приведенном выше примере вы, должно быть, заметили, что при конвертации объекта Python в JSON он не форматируется, а вывод идет по прямой линии. Мы можем отформатировать JSON, передав параметр indent методу dumps().</p>

<p><span class="bold">Пример: </span>форматирование JSON</p>
<CodeSnippet type="multi">
{`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects": ["Python", "Data Structures"]},\
{"studentid": 2, "name": "Nisha", "subjects": ["Java", "C++", "R Lang"]} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4)
print(json_formatted_str)`}
</CodeSnippet>

<p><span class="bold">Вывод</span></p>
<CodeSnippet type="multi" hideCopyButton>
{`[
    {
        "studentid": 1,
        "имя": "Нихил",
        "субъекты": [
            "Питон",
            «Структуры данных»
        ]
    },
    {
        "studentid": 2,
        "имя": "Ниша",
        "субъекты": [
            "Ява",
            "С++",
            "Р Ланг"
        ]
    }
]`}
</CodeSnippet>
















<h2 id="sort">Сортировка JSON</h2>

<p>Мы можем сортировать данные JSON с помощью параметра sort_keys метода dumps(). Этот параметр принимает логическое значение и возвращает отсортированный JSON, если переданное значение равно True. По умолчанию переданное значение равно False.</p>

<p><span class="bold">Пример: </span>сортировка JSON</p>
<CodeSnippet type="multi">
{`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects":\
["Python", "Data Structures"], "company":"GFG"},\
{"studentid": 2, "name": "Nisha", "subjects":\
["Java", "C++", "R Lang"], "company":"GFG"} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4, sort_keys=True)
print(json_formatted_str)`}
</CodeSnippet>

<p><span class="bold">Вывод</span></p>
<CodeSnippet type="multi" hideCopyButton>
{`[
    {
        "компания": "GFG",
        "имя": "Нихил",
        "studentid": 1,
        "субъекты": [
            "Питон",
            «Структуры данных»
        ]
    },
    {
        "компания": "GFG",
        "имя": "Ниша",
        "studentid": 2,
        "субъекты": [
            "Ява",
            "С++",
            "Р Ланг"
        ]
    }
]`}
</CodeSnippet>
