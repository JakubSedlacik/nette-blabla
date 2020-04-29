<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;

final class HomepagePresenter extends AbstractPresenter
{
    public function renderDefault()
    {
        $mainTiles =
        [
            ["#0", "assets/images/tree.jpg", "strom"],
            ["#1", "assets/images/dog.jpg", "pes"],
            ["#2", "assets/images/horse.jpg", "kůň"],
            ["#3", "assets/images/water.jpg", "voda"],
        ];

        $this->template->mainTiles = $mainTiles;

        $lists =
        [
            ["#0", "Pizzeria Tina", "list1", "16", "Bře",],
            ["#1", "Smékalovo pekařství", "list2", "03", "Bře",],
            ["#2", "Pekárna Borová", "list3", "16", "Úno",],
            ["#3", "Cyklo Jožák", "list4", "30", "Led",],
            ["#4", "E.N.A.P.O", "list5", "29", "Led",],
            ["#5", "Trafika u Jardy", "list6", "08", "Pro",],
            ["#6", "Lékárna", "list7", "24", "Lis",],
        ];

        $this->template->lists = $lists;
    }
}
