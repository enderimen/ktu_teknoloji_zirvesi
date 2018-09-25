//Tüm bağlantıları seç
    $('a[href*="#"]')
      //Bağlantları kaldırıyoruz
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      //Gidilecek Başlığı Bul
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      //Aranan başlık var mı?
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // bir sonrakini çağır
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { //Odaklandı mı? 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); //tekrar odaklan
          };
        });
      }
    }
  });