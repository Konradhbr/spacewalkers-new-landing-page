$(document).ready(function () {
  function getValues() {
    var userName = document.getElementById('name').value;
    var userCompany = document.getElementById('company').value;
    var userPhoneNumber = document.getElementById('mobile-number').value;
    var userEmail = document.getElementById('email').value;
    var userMessage = document.getElementById('message').value;
  }

  function disappear() {
    var email = document.getElementById('email').value;
    var placeholder = document.getElementById('holderReq');
    if (email != ' ') {
      placeholder.style.display = 'none';
    } else {
    }
  }

  function sendForm() {
    // axios.post(`https://tecra.space/api/spacewalkers/training`, {email: userEmail}).then(res => {
    // 	if (res.status === 200) {
    window.location.reload();

    // 	}
    // });
  }

  const photoURL = 'src/assets/images/team/';
  const members = [
    {
      name: 'Tomasz',
      surname: 'Wacławek',
      profession: 'CEO, Creative Director',
      plProfession: 'CEO, Dyrektor Generalny',
      description:
        'Making games for fun and profit! Designer and coder with extensive industry experience gained in well-known studios like Devolver Digital and Flying Wild Hog. Tomasz navigates our space ship and leads the way in everyday’s work at Spacewalkers. He is an expert in the indie gaming genre. Developed such titles as Ronin, Immortal Planet and Door in the Woods.',
      plDescription:
        'Głównodowodzący naszego kosmicznego statku. Specjalista od kodu z wieloletnim doświadczeniem w branży, które zbierał w takich studio jak Devolver Digital, czy Flying Wild Hog. Nadaje właściwy kierunek wszystkim zadaniom w Spacewalkers. Od lat tworzy gry dla zabawy i zarobku! Pracował nad wieloma świetnie przyjętymi grami z gatunku Indie, między innymi: Ronin, Immortal Planet, Door in the Woods.',
    },
    {
      name: 'Artur',
      surname: 'Kulczycki',
      profession: 'Art Director',
      plProfession: 'Kierownik ds. Artystycznych/Scenografii',
      description:
        'Artist with many years of experience in the industry. People person, a man with a big heart! He was working for many established companies, such as Drago Entertainment, Techland, Plot Twist, Awesome Industries and Tate Interactive. He took part in production of the following titles: Lucky Luke, My Horse and Me 2, Lanfeust, Dying Light, Dying Light 2, Dying Light Bad Blood, Drift Zone 2, The Last Case of Benedict Fox.',
      plDescription:
        'Artysta z wieloletnim doświadczeniem w branży gamingowej. Towarzyski człowiek z wielkim sercem, podchodzi z pasją do swoich zadań. Ma obsesję na punkcie Avatara. Pracował między innymi dla Drago Entertainment, Techland, Plot Twist, Awesome Industries czy Tate Interactive. Ma na koncie udział w takich produkcjach jak: Lucky Luke, My Horse and Me 2, Lanfeust, Dying Light, Dying Light 2, Dying Light Bad Blood, Drift Zone 2, The Last Case of Benedict Fox.',
    },
    {
      name: 'Maksymilian',
      surname: 'Strzelecki',
      profession: 'Senior Programmer',
      plProfession: 'Starszy Programista',
      description:
        "Makes sure the AI doesn't kill us all (yet). Huge nerd, loves playing League of Legends in his spare time. Founder of the Ancient Forge Studio, which published such games as The Tenants and Glorious Companions.",
      plDescription:
        'Na co dzień upewnia się, że sztuczna inteligencja nie planuje się nas wszystkich pozbyć. Nerd komputerowy, w wolnych chwilach gra w League of Legends. Założyciel Ancient Forge Studio, które wydało takie gry jak The Tenants i Glorious Companions.',
    },
    {
      name: 'Kamil',
      surname: 'Błaszkiewicz',
      profession: 'Marketing Manager',
      plProfession: 'Kierownik ds. marketingu',
      description:
        'Responsible for content creation, social media, and marketing related operations. Gamer, streamer and a cat dad. Rock music addict. Made a transition from a corporate job to game development to make a living off his biggest passion. Previously worked as a Project Manager and was responsible for processes optimization. Also was working on the projects for Amazon’s clients.',
      plDescription:
        'Odpowiedzialny za tworzenie treści, media społecznościowe i szeroko pojęty marketing. Gracz, streamer i koci tata. Uzależniony od muzyki rockowej. Trafił do gamedevu żeby zamienić swoją największą pasję w sposób na życie. Wcześniej zajmował się optymalizacją procesów w organizacji oraz realizował projekty dla klientów Amazon.',
    },
  ];

  var member;
  for (member = 0; member < members.length; member++) {
    $('.team__items').append(
      `<div class='team__item'>
     <span class='team__item__title'>${members[member].name}</span>
     <div class='team__item__image'>
      <img src=${photoURL + [member + 1] + '.jpg'} alt='team-member' />
      </div>
     <div class='team__item__text'>
        <h3>${members[member].surname}</h3>
        <span class='decor'>${members[member].plProfession}</span>
      </div>
    </div>`
    );
  }
});
