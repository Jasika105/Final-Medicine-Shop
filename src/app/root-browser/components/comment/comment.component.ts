import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  comment = "";
  postComment = [];
  post() {
   this.postComment.push(this.comment);
  }

}


