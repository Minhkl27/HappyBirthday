function showSurprise() {
    const surpriseDiv = document.getElementById("surprise");
    surpriseDiv.classList.remove("hidden"); // Hiện nội dung ẩn
    $('.contain_head').hide();
    // const audio = document.getElementById("birthdaySong");
    // if (audio) {
    //     audio.play(); // Phát nhạc chúc mừng sinh nhật
    // }

    const audioFiles = [
        'audio/happy-birthday-155461.mp3', // Thay bằng đường dẫn tới file âm thanh
        'audio/happy-birthday-220024.mp3',
        'audio/happy-birthday-254480.mp3'
    ];

    const audioPlayer = document.getElementById('birthdaySong');
    let currentIndex = 0;

    // Hàm phát âm thanh hiện tại
    function playCurrentAudio() {
        audioPlayer.src = audioFiles[currentIndex];
        audioPlayer.play();
    }

    // Lắng nghe sự kiện "ended" để phát file tiếp theo hoặc lặp lại danh sách
    audioPlayer.addEventListener('ended', () => {
        currentIndex++;
        if (currentIndex >= audioFiles.length) {
            currentIndex = 0; // Reset chỉ số về đầu danh sách
        }
        playCurrentAudio(); // Phát bài hát tiếp theo hoặc bắt đầu lại
    });

    // Bắt đầu phát
    playCurrentAudio();

    // Hiện bóng bay
    document.querySelector('.balloons-container').style.display = 'block';

    // Hiện bóng bay rơi xuống
    document.querySelector('.falling-balloons').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Hiển thị slide hiện tại
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Chuyển đến slide kế tiếp
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Quay lại slide trước đó
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Tự động chuyển ảnh
setInterval(nextSlide, 5000); // Chuyển ảnh sau mỗi 5 giây

// Nút điều khiển
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);
