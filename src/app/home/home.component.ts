import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    /*global $, window, document*/
    $(document).ready(function () {
      'use strict';

      // Show Color Option Div When Click On The Gear

      $('.gear-check').click(function () {
        if ($('.gear-check').hasClass('optiontoggle')) {
          $('.color-option').animate({ marginLeft: 0 });

          $(this).removeClass('optiontoggle');
        } else {
          $('.color-option').animate({ marginLeft: -200 });

          $(this).addClass('optiontoggle');
        }
      });

      // Change Theme Color On Click

      var colorLi = $('.color-option ul li'),
        scrollButton = $('#scroll-top');

      colorLi
        .eq(0)
        .css('backgroundColor', '#E41B17')
        .end()
        .eq(1)
        .css('backgroundColor', '#E426D5')
        .end()
        .eq(2)
        .css('backgroundColor', '#009AFF')
        .end()
        .eq(3)
        .css('backgroundColor', '#FFD500');

      colorLi.click(function () {
        $("link[href*='theme']").attr('href', $(this).attr('data-value'));
      });

      // show and hide scroll to top button

      $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
          scrollButton.fadeIn(500);
        } else {
          scrollButton.fadeOut(500);
        }
      });

      //click on button to scroll to top

      scrollButton.click(function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
      });
    });

    // Loading Screen

    $(window).on('load', function () {
      'use strict';

      // Loading Elements

      $('.loading-overlay .sk-folding-cube').fadeOut(1000, function () {
        // Show The Scroll
        $('body').css('overflow', 'auto');

        $(this)
          .parent()
          .fadeOut(1000, function () {
            $(this).remove();
          });
      });
    });
  }
}
