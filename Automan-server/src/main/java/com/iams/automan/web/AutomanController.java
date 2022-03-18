package com.iams.automan.web;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.iams.automan.model.request.UserEvent;

@RestController
@RequestMapping("/automan")
public class AutomanController {
	
	List<UserEvent> userEvents = new ArrayList<>();

	@RequestMapping(path="/event/process", method = RequestMethod.POST )
	public ResponseEntity processUserEvents(@RequestBody UserEvent userEvent) {
		UserEvent lastEvent = userEvents.size() == 0 ? null : userEvents.get(userEvents.size()-1 );
		if(lastEvent != null && lastEvent.equals(userEvent)) {
			lastEvent.setData(userEvent.getData());
		} else {
			userEvents.add(userEvent);
		}
		System.out.println(userEvents);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(path="/event/list", method = RequestMethod.GET )
	public ResponseEntity<List<UserEvent>> userEventsList() {
		return new ResponseEntity<List<UserEvent>>(userEvents, HttpStatus.OK);
	}
	
	@RequestMapping(path="/event/reset", method = RequestMethod.GET )
	public ResponseEntity processResetUserEvents() {
		userEvents.clear();
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
