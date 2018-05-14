import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Rating } from '../../interfaces/rating';
import { RatingService } from '../../providers/rating.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tmn-rating',
  templateUrl: './tmn-rating.component.html',
  styleUrls: ['./tmn-rating.component.sass']
})
export class TmnRatingComponent implements OnInit, OnDestroy {

  private company: string;
  private rating: Rating;
  subsRoute$: Subscription;
  subsRating$: Subscription;

  constructor(
    private ratingService: RatingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subsRoute$ = this.route.params.subscribe((params: any) => {
      this.company = params['id'];
    });

    this.subsRating$ = this.ratingService.getRatingId(this.company).subscribe(values => {
      console.log(values);
      this.rating = values[0];
    });
  }

  ngOnDestroy(): void {
    this.subsRoute$.unsubscribe();
    this.subsRating$.unsubscribe();
  }

  onLikeDislike(cont: number): void {
    this.ratingService.getRating(this.company)
      .then((rat: Rating) => {
        if (cont > 0) {
          this.ratingService.updateRating({ uid: `${this.company}`, like: rat.like + 1 })
            .catch(err => console.log('[Erro]: ' + err));
        } else {
          this.ratingService.updateRating({ uid: `${this.company}`, dislike: rat.dislike + 1 })
            .catch(err => console.log('[Erro]: ' + err));
        }
      })
      .catch(err => console.log('[ERRO]: ' + err));
  }


}
