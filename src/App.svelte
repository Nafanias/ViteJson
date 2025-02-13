<script>
	import "carbon-components-svelte/css/all.css";
	import { Router, Route, Link, links, useLocation, navigate } from 'svelte-routing';
	import { onMount } from 'svelte';
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		HeaderUtilities,
		HeaderGlobalAction,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column,
		PaginationNav,
		OrderedList,
		ListItem, 
		Theme 
	  } from "carbon-components-svelte";
	import Logout from "carbon-icons-svelte/lib/Logout.svelte";
	import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
	import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
	  

	import ProgressBar from './ProgressBar.svelte'; // Импортируем компонент прогресс-бара
	import Footer from './Footer.svelte'; // Импортируем компонент нижняя полоса
	
	import Home from './Home.svelte'; // Импорт главной страницы
	import JSONvsXML from './JSONvsXML.svelte'; // Импорт главной страницы сравнения
	import WellFormedJSON from './WellFormedJSON.svelte'; // Импорт страницы
	import Python from './python.svelte'; // Импорт страницы про python
	import php from './PHP.svelte'; // Импорт страницы про PHP
	import gogo from './go.svelte'; // ПРОВЕРКА
	import JavaScript from './JavaScript.svelte'; // ПРОВЕРКА
	import Сsharp from './csharp.svelte'; // Импорт страницы про C#
	

	let isSideNavOpen = false;
	let page = 1; // Начальная страница
	const totalPages = 7; // Общее количество страниц

	// Объект секций для каждой страницы
    const sectionsMap = {
		1: [
			{ id: 'JSON', title: 'Как устроен JSON' },
			{ id: 'JSON-object', title: 'JSON-объект' },
			{ id: 'JSON-array', title: 'JSON-массив' }
        ],
        2: [
            { id: 'vsXML', title: 'JSON vs XML' }
        ],
        3: [
            { id: 'data', title: 'Данные написаны в виде пар «ключ:значение»' },
			{ id: 'Separation', title: 'Данные разделены запятыми' },
			{ id: 'object', title: 'Объект находится внутри фигурных скобок {}' },
			{ id: 'array', title: 'Массив — внутри квадратных []' },
			{ id: 'output', title: 'Вывод' }
        ],
		4: [
            { id: 'data', title: 'Данные написаны в виде пар «ключ:значение»' },
			
			{ id: 'Formatting', title: 'Форматирование JSON' },
			{ id: 'sort', title: 'Сортировка JSON' }
        ],
		
		6:[ 
			{ id: 'encoding', title: 'Кодирование' },
			{ id: 'decoding', title: 'Декодирование' },
			{ id: 'errors', title: 'Получение ошибок и их исправление' },
			{ id: 'http', title: 'HTTP-запросы в формате JSON' }
		],
        // Добавьте секции для других страниц аналогично
    };

	let sections = [];
	
	
	function changePage(newPage) {
		page = newPage;
		sections = sectionsMap[page] || []; // Обновляем секции в зависимости от выбранной страницы
		
		// Изменение маршрута в зависимости от страницы
		switch (page) {
			case 1:
				navigate('/');
				break;
			case 2:
				navigate('/vsXML');
				break;
			case 3:
				navigate('/FormedJSON');
				break;
			case 4:
				navigate('/python');
				break;
			case 5:
				navigate('/JavaScript');
				break;
			case 6:
				navigate('/php');
				break;
			case 7:
				navigate('/Сsharp');
				break;
			default:
				navigate('/');
			}
		}
	
	function Plug() {
		alert('Заглушка'); // Например, просто показываем сообщение
	}
	
	// Добавляем новые функции
  let headerHeight = 60;

  function scrollToAnchor(e, id) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20; // Дополнительный отступ 20px

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Обновляем URL
      history.replaceState(null, null, `#${id}`);
    }
  }

  onMount(() => {
    // Рассчитываем высоту хедера при загрузке
    const header = document.querySelector('header.cds--header');
    headerHeight = header?.offsetHeight || 60;
	sections = sectionsMap[page] || [];
    
    // Добавляем обработчик ресайза
    const handleResize = () => {
      headerHeight = document.querySelector('header.cds--header')?.offsetHeight || 60;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<style>
  .pagination-container {
    display: flex;
    justify-content: center; /* Центрирование по горизонтали */
  }
	
	:global(.desktop-nav) {
    position: fixed;
    right: 20px;
    top: 80px;
    width: 300px;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    z-index: 1000;
    box-shadow: var(--cds-shadow-hover);
}

	/* Стили для улучшения внешнего вида */
  .toc {
    padding: 1rem;
  }

  .toc h5 {
    margin-top: 0;
    color: var(--cds-text-primary);
  }

  :global([id]) {
    scroll-margin-top: 80px; /* Отступ для якорей */
  }

  :global(.cds--content) {
    padding-top: 60px; /* Отступ для контента */
  }

  .nav-link {
    color: var(--cds-link-primary);
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;
    display: block;
    padding: 0.2rem 0;
  }

  .nav-link:hover {
    color: var(--cds-link-primary-hover);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    :global([id]) {
      scroll-margin-top: 48px;
    }
    
    :global(.cds--content) {
      padding-top: 48px;
    }
  }
</style>

<!--<ProgressBar />-->

<div use:links>
    <Router>
		<Header persistentHamburgerMenu={true} company="Рога и копыта" platformName="" bind:isSideNavOpen>
			<svelte:fragment slot="skip-to-content">
				<SkipToContent />
			</svelte:fragment>
			<HeaderNav>
				<HeaderNavItem href="/" text="Что такое JSON" on:click={() => changePage(1)} />
				<HeaderNavItem href="/vsXML" text="JSON vs XML" on:click={() => changePage(2)} />
				<HeaderNavItem href="/FormedJSON" text="Well Formed JSON" on:click={() => changePage(3)} />
				<HeaderNavMenu text="Языки программирования">
					<HeaderNavItem href="/python" text="Python" on:click={() => changePage(4)} />
					<HeaderNavItem href="/JavaScript" text="JavaScript" on:click={() => changePage(5)}/>
					<HeaderNavItem href="/php" text="PHP" on:click={() => changePage(6)} />
					<HeaderNavItem href="/Сsharp" text="C#" on:click={() => changePage(7)} />
				</HeaderNavMenu>
			</HeaderNav>
			<HeaderUtilities>
				<Theme
				  render="toggle"
				  toggle={{
					themes: ["g10", "g80"],
					labelA: "",
					labelB: "",
					hideLabel: false,
					size: "sm",
				  }}
				/> 
				<HeaderGlobalAction iconDescription="Profile" icon={UserAvatarFilledAlt} />
				<HeaderGlobalAction iconDescription="Log out" tooltipAlignment="end" icon={Logout} on:click={Plug}/>
			</HeaderUtilities>
			
		</Header>
			
		<SideNav bind:isOpen={isSideNavOpen}>
			<SideNavItems>
				<SideNavLink href="/" text="Что такое JSON" on:click={() => changePage(1)} />
				<SideNavLink href="/vsXML" text="JSON vs XML" on:click={() => changePage(2)} />
				<SideNavLink href="/FormedJSON" text="Well Formed JSON" on:click={() => changePage(3)} />
				<SideNavMenu text="Языки программирования">
					<SideNavMenuItem href="/python" text="Python" on:click={() => changePage(4)} />
					<SideNavMenuItem href="/JavaScript" text="JavaScript" on:click={() => changePage(5)}/>
					<SideNavMenuItem href="/php" text="PHP" on:click={() => changePage(6)} />
					<SideNavMenuItem href="/Сsharp" text="C#" on:click={() => changePage(7)} />
					<SideNavMenuItem href="/GO" text="GO" />
				</SideNavMenu>
			</SideNavItems>
		</SideNav>
				
		<Content class={isSideNavOpen ? 'content-shifted' : ''}>
		<Grid>
			<!-- Мобильная навигация (видна только на маленьких экранах) -->
			<Row class="mobile-nav">
				<Column sm={4} md={8} lg={0}>
					<!--<OrderedList>
						{#each sections as section}
						<ListItem>
							<Link href="#{section.id}">{section.title}</Link>
						</ListItem>
						{/each}
					</OrderedList>-->
				</Column>
			</Row>
			
			<Row>
				<!-- Отступ для выравния по центру -->
				<Column lg={3}/>
				<!-- Основной контент -->
				<Column sm={4} md={8} lg={10}>
                        <Route path="/" component={Home} />
						<Route path="/vsXML" component={JSONvsXML} /> 
						<Route path="/FormedJSON" component={WellFormedJSON} />
						<Route path="/python" component={Python} />
						<Route path="/JavaScript" component={JavaScript} />  
						<Route path="/php" component={php} /> 
						<Route path="/Сsharp" component={Сsharp} />
						<Route path="/GO" component={gogo} />
				</Column>
	
				<!-- Десктопная навигация (видна только на больших экранах) -->
				<Column lg={3} class="desktop-nav {''}">	
					<div class="toc">
						<h5>Содержание</h5>
						<SideNavItems>
							<OrderedList>
								{#each sections as section}
								<ListItem>
									 <a href={`#${section.id}`} 
									   on:click|preventDefault={() => {
										   console.log('Нажатие на якорь:', section.id);
										   const element = document.getElementById(section.id);
										   console.log('Найденный элемент:', element);
										   element?.scrollIntoView({ behavior: 'smooth' });
									   }} 
									   class="nav-link">
										- {section.title}
									</a>
								</ListItem>
								{/each}
							</OrderedList>
						</SideNavItems>
					</div>
				</Column>
			</Row>
		</Grid>
			
        </Content>
		
	<div class="pagination-container">	
		<PaginationNav bind:page forwardText="Следующая страница" backwardText="Предыдущая страница" total={totalPages} on:change={event => changePage(event.detail.page)} />
	</div>

	
    </Router>
	<Footer />
</div>