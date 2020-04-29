<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;

abstract class AbstractPresenter extends Nette\Application\UI\Presenter
{
    public function beforeRender()
    {
        $year = date("Y");
        $this->template->year = $year;

        $navItems = ["#0" => "obloha", "#1" => "mraky", "#2" => "slunce",];
        $this->template->navItems = $navItems;

        $navSubItems =
        [
            ["#0", "togItem1A", "&rsaquo; BENQ",],
            ["#1", "togItem1B", "&rsaquo; senseye",],
            ["#2", "togItem1C", "&raquo; klávesnice",],
            ["#3", "togItem1D", "&raquo; myš",],
        ];
        $this->template->navSubItems = $navSubItems;

        $footerImages = 
        [
            "#0" => "assets/images/cactus0.jpg",
            "#1" => "assets/images/cactus1.jpg",
            "#2" => "assets/images/cactus2.jpg",
            "#3" => "assets/images/cactus3.jpg",
            "#4" => "assets/images/cactus4.jpg",
            "#5" => "assets/images/cactus5.jpg",
            "#6" => "assets/images/cactus6.jpg",
            "#7" => "assets/images/cactus7.jpg",
        ];
        $this->template->footerImages = $footerImages;
    }
}
