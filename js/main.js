window.onload = function () {
     //ham tao so ngau nhien
     function randomInRange(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
     }

     // list song
     let playlist = document.querySelector(".list_song");

     //play song
     let song_playing = document.querySelector("#playsong");
     let image_song_playing = document.querySelector(".image_song");

     const app = {
          songs: [
               {
                    name: 'Cắt Đôi Nỗi Sầu',
                    singer: 'Tăng Duy Tân',
                    path: 'music/catdoinoisau.mp3',
                    image: 'image/catdoinoisau.jpg'
               },
               {
                    name: 'Đêm Trăng Tình Yêu',
                    singer: 'Mạnh Dũng',
                    path: 'music/demtrangtinhyeu.mp3',
                    image: 'image/demtrangtinhyeu.jpg'
               },
               {
                    name: 'Nhiều Lúc Có Như Không',
                    singer: 'Phạm Trưởng',
                    path: 'music/nhieulucconhukhong.mp3',
                    image: 'image/nhieulucconhukhong.jpg'
               },
               {
                    name: 'Nụ Hôn Gió',
                    singer: 'Lâm Chấn Hải',
                    path: 'music/nuhongio.mp3',
                    image: 'image/nuhongio.jpg'
               },
               {
                    name: 'Trang Giấy Trắng',
                    singer: 'Phạm Trưởng',
                    path: 'music/tranggiaytrang.mp3',
                    image: 'image/tranggiaytrang.jpg'
               },
               {
                    name: 'Vầng Trăng Cô Đơn',
                    singer: 'Dương Eward',
                    path: 'music/vangtrangcodon.mp3',
                    image: 'image/vangtrangcodon.jpg'
               },
               {
                    name: 'Đắng Môi',
                    singer: 'Phạm Trưởng',
                    path: 'music/dangmoi.mp3',
                    image: 'image/dangmoi.jpg'
               },
               {
                    name: 'Anh Mới Chính Là Người Em Yêu',
                    singer: 'Phạm Trưởng',
                    path: 'music/anhmoichinhlanguoiemyeu.mp3',
                    image: 'image/anhmoichinhlanguoiemyeu.jpg'
               },
               {
                    name: 'Không Được Khóc',
                    singer: 'Phạm Trưởng',
                    path: 'music/khongduockhoc.mp3',
                    image: 'image/khongduockhoc.jpg'
               },
               {
                    name: 'Nụ Hôn Và Giọt Nước Mắt',
                    singer: 'Lâm Chấn Huy',
                    path: 'music/nuhonvagiotnuocmat.mp3',
                    image: 'image/nuhonvagiotnuocmat.jpg'
               },
               {
                    name: 'Mối Tính Chiều Mưa Bay',
                    singer: 'Lâm Chấn Hải',
                    path: 'music/moitinhchieumuabay.mp3',
                    image: 'image/moitinhchieumuabay.jpg'
               },
               {
                    name: 'Tình Yêu Hoa Gió',
                    singer: 'Trương Thế Vinh',
                    path: 'music/tinhyeuhoagio.mp3',
                    image: 'image/tinhyeuhoagio.jpg'
               },
               {
                    name: 'Hãy Về Đây Bên Anh',
                    singer: 'Duy Mạnh',
                    path: 'music/hayvedaybenanh.mp3',
                    image: 'image/hayvedaybenanh.jpg'
               },
               {
                    name: 'Bóng Trăng Dần Trôi',
                    singer: 'Duy Mạnh',
                    path: 'music/bongtrangdantroi.mp3',
                    image: 'image/hayvedaybenanh.jpg'
               },
               {
                    name: 'Khóc Cho Người Đi',
                    singer: 'Duy Mạnh',
                    path: 'music/khocchonguoidi.mp3',
                    image: 'image/hayvedaybenanh.jpg'
               },
               {
                    name: 'Giây Phút Chia Xa',
                    singer: 'Duy Mạnh',
                    path: 'music/giayphutchiaxa.mp3',
                    image: 'image/hayvedaybenanh.jpg'
               }

          ],
          //render list song 
          render: function () {
               const htmls = this.songs.map(function (song) {
                    return `
                    <li class="list_song_item">
                    <div class="list_song_item--image">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="list_song_item--info">
                        <p id="name_song">${song.name}</p>
                        <p id="author">${song.singer}</p>
                    </div>
                    <div class="list_song_item--multi">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </li>
                    `
               });
               playlist.innerHTML = htmls.join(' ');

          },
          //lay bai hat dau tien
          getCurrensong: function () {
               return this.songs[0];
          },
          //hien thi bai hat dau tien
          loadCurrensong: function () {
               song_playing.textContent = this.getCurrensong().name;
               image_song_playing.innerHTML = `<img src="${this.getCurrensong().image}"
               alt="">`;
          },

          start: function () {
               this.render();
               // lay bai hat dau tien
               this.loadCurrensong();
          }
     }
     app.start();
     //pause play
     let buttonpause = document.querySelector(".pause");
     let pause = document.querySelector(".pause_pause");
     let play = document.querySelector(".pause_play");
     //lay bai hat theo index
     //phat bai hat
     let pausesong = document.querySelector(".fa-pause");
     let playsong = document.querySelector(".fa-play");
     let listsongitem = document.querySelectorAll(".list_song_item");
     let audio = document.querySelector("#audio");
     //phat nhac theo index
     var index_song = 0;
     audio.src = app.songs[index_song].path;
     function phatnhac(index) {
          console.log(app.songs[index].name);
          song_playing.textContent = app.songs[index].name;
          image_song_playing.innerHTML = `<img src="${app.songs[index].image}"
               alt="">`;
          audio.src = app.songs[index].path;
          console.log(audio.src);
          playsong.click();
          status_play = true
     };
     // làm đĩa cd xoay/ dừng
     let cd_xoay = document.querySelector(".image_song");

     const edit = cd_xoay.animate(
          [
               { transform: 'rotate(360deg)' }
          ], {
          duration: 10000,
          delay: 1,
          iterations: Infinity,
     }
     );
     edit.pause();

     pausesong.addEventListener('click', () => {
          pause.classList.add('close');
          play.classList.remove('close');
          //dung nhac
          audio.pause();
          //dung hinh
          edit.pause();

     });
     playsong.addEventListener('click', () => {
          pause.classList.remove('close');
          play.classList.add('close');
          // phat nhac
          audio.play();
          // xoay hinh
          edit.play();
     });
     listsongitem.forEach(function (songitem, index) {
          songitem.addEventListener('click', function () {
               phatnhac(index);
               index_song = index;
          });
     });
     //chuyen tiep bai hat
     let song_previous = document.querySelector(".backward");
     let song_next = document.querySelector(".next");
     //ham chế độ phát
     function kieuphat(){

     }


     song_next.addEventListener('click', () => {
          if (index_song < app.songs.length - 1) {
               index_song++;
          }
          else {
               index_song = 0;
          }
          phatnhac(index_song);
     });
     song_previous.addEventListener('click', () => {
          if (index_song > 0) {
               index_song--;
          }
          else {
               index_song = app.songs.length - 1;
          }
          phatnhac(index_song);
     });
     let time_line = document.querySelector("#time_line");

     let timeplaying_minute = document.querySelector("#timeplaying  #minute");
     let timeplaying_second = document.querySelector("#timeplaying  #second");
     let timesong_minute = document.querySelector("#timesong #minute");
     let timesong_second = document.querySelector("#timesong #second");
     let process = document.querySelector("#process");
     //hát smai 1 bài
     let repeat = document.querySelector(".reload");
     repeat.addEventListener('click', function () {
          repeat.classList.toggle('active');
     })
     //hat ngau nhien 
     let random_song = document.querySelector('.random');
     random_song.addEventListener('click', function () {
          random_song.classList.toggle('active');
     });
     //time bài hát, tua, ...
     audio.ontimeupdate = function () {
          //audio.currentTime trả về thời gian đang chạy
          //audio.duration thời lượng bài hát
          //audio.currentTime=.. gán thời gian=> tua
          if (audio.duration) {
               //Phương thức Math.floor() làm tròn một số xuống đến số nguyên gần nhất.
               var percen = Math.floor((audio.currentTime / audio.duration) * 100);
               time_line.value = percen;
               process.value = percen;

               // gan du lieu cho time line
               timeplaying_minute.textContent = Math.floor(Math.floor(audio.currentTime) / 60);
               timeplaying_second.textContent = Math.floor(audio.currentTime % 60);

               timesong_minute.textContent = Math.floor(Math.floor(audio.duration) / 60);
               timesong_second.textContent = Math.floor(audio.duration % 60);

               //phat lai
               if (repeat.classList.contains('active')) {
                    if (audio.currentTime == audio.duration) {
                         phatnhac(index_song);
                    }
               }
               else//chuyển bài ngẫu nhiên
               {
                    if (random_song.classList.contains('active')) {
                         let numbersong = app.songs.length;
                         let indexrandom = randomInRange(0, numbersong - 1);
                         if (audio.currentTime == audio.duration) {
                              phatnhac(indexrandom);
                         }

                    }
                    else {// chuyển đến bài hát tiếp theo
                         if (audio.currentTime == audio.duration) {
                              song_next.click();
                         }
                    }
               }
          }
     };
     //tua
     time_line.addEventListener('change', function (e) {
          let tua = e.target.value;
          audio.currentTime = (tua / 100) * audio.duration;
     });



}     