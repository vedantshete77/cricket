package com.cricinfo.CricInfo.service;

import com.cricinfo.CricInfo.model.Match;

import java.util.List;

public interface MatchService {

    List<Match> getAllMatches();

    List<Match> getLiveMatches();

    List<List<String>> pointTable();
}
